import { useState } from "react";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Chicken Curry",
      price: 299,
      quantity: 1,
      image: "https://media.istockphoto.com/id/177126541/photo/indian-chicken-jalfrezi-curry.jpg?s=612x612&w=0&k=20&c=lOkmRiBFovpKW5FA9hn0_yXg5HOTx78Can4E3JavpFE=",
    },
    {
      id: 2,
      name: "Panner Pizza",
      price: 180,
      quantity: 1,
      image: "https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=",
    },
  ]);

  const increaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="max-w-4xl mx-auto py-6 px-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-600 text-center">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center justify-between border-b pb-4 space-y-4 sm:space-y-0"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-800 text-center sm:text-left">{item.name}</h3>
                  <p className="text-gray-600 text-center sm:text-left">₹{item.price}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="px-3 py-1 border rounded-l text-gray-700 bg-gray-200"
                >
                  -
                </button>
                <span className="px-4 py-1 border-t border-b text-gray-800">{item.quantity}</span>
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="px-3 py-1 border rounded-r text-gray-700 bg-gray-200"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="text-right text-lg font-bold text-gray-800">Total: ₹{totalPrice}</div>
          <button className="w-auto p-3 bg-orange-500 text-white py-2 rounded-lg mt-4 hover:bg-green-600  hover:text-white">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
