const RestaurantMenuPage = () => {
    const menuItems = [
      {
        id: 1,
        name: "Chicken Curry",
        price: "₹150",
        description: "Tasty Chicken Curry",
        image: "https://via.placeholder.com/80",
      },
      {
        id: 2,
        name: "Chicken Fry",
        price: "₹180",
        description: "Crispy Chicken Fry",
        image: "https://via.placeholder.com/80",
      },
      {
        id: 3,
        name: "Egg Curry (2 Pcs)",
        price: "₹80",
        description: "Delicious Egg Curry (2 Pcs)",
        image: "https://via.placeholder.com/80",
      },
      {
        id: 4,
        name: "Plain Rice",
        price: "₹60",
        description: "Steamed Plain Rice",
        image: "https://via.placeholder.com/80",
      },
    ];
  
    return (
      <div className="max-w-4xl mx-auto py-6 px-4">
        {/* Category Header */}
        <div className="bg-orange-500 text-white font-bold text-lg p-3 text-center">
          Andhra Meals
        </div>
  
        {/* Menu List */}
        <div className="divide-y divide-gray-300">
          {menuItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between py-4">
              <div>
                <h3 className="font-bold text-lg text-gray-900">{item.name}</h3>
                <p className="text-gray-700">{item.price}</p>
                <p className="text-gray-500 text-sm">{item.description}</p>
              </div>
              <div className="flex items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-lg object-cover mr-4"
                />
                <button className="bg-white border border-green-500 text-green-500 px-4 py-1 rounded-lg shadow-md hover:bg-green-500 hover:text-white">
                  ADD
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default RestaurantMenuPage;
  