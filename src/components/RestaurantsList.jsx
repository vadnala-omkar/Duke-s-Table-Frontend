import React from "react";

const restaurants = [
  {
    id: 1,
    name: "Gourmet Palace",
    image: "https://static.vecteezy.com/system/resources/previews/033/633/349/non_2x/indian-food-on-wooden-table-with-bowls-of-food-ai-generated-free-photo.jpg",
    rating: "4.5",
    description: "Experience fine dining with exquisite flavors and top-quality ingredients."
  },
  {
    id: 2,
    name: "Urban Eats",
    image: "https://static.vecteezy.com/system/resources/previews/033/632/413/large_2x/bombay-india-s-first-indian-restaurant-opens-in-new-york-city-ai-generated-free-photo.jpg",
    rating: "4.2",
    description: "A trendy spot for casual dining with a variety of delicious meals."
  },
  {
    id: 3,
    name: "Red Stiletto Restaurant",
    image: "https://i.ytimg.com/vi/8_Xqs4qH7mY/maxresdefault.jpg",
    rating: "4.5",
    description: "Experience fine dining with exquisite flavors and top-quality ingredients."
  },
  {
    id: 4,
    name: "Asian Eats",
    image: "https://png.pngtree.com/thumb_back/fw800/background/20240705/pngtree-asian-restaurant-urban-service-chef-generate-ai-image_15927988.jpg",
    rating: "4.2",
    description: "A trendy spot for casual dining with a variety of delicious meals."
  },
  {
    id: 5,
    name: "Pink Palace",
    image: "https://mindfuldesignconsulting.com/wp-content/uploads/2023/05/Elegant-Purple-and-Yelllow-Restaurant-AI-Design.jpg",
    rating: "4.2",
    description: "A trendy spot for casual dining with a variety of delicious meals."
  }
];

const RestaurantList = () => {
  return (
    <div className="py-10 px-6 max-w-6xl mx-auto bg-white">
      <h2 className="text-2xl font-bold mb-6 text-left">Top Restaurants</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-5">
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className="bg-white shadow-md rounded-lg overflow-hidden p-4 pb-2 hover:shadow-xl transition-all duration-500 ease-in-out transform hover:-translate-y-2">
            <img src={restaurant.image} alt={restaurant.name} className="w-full h-40 object-cover rounded-lg mb-0 transition-transform duration-500 ease-in-out hover:scale-105" />
            <div className="p-4 pb-1 mt-0">
              <h3 className="text-xl font-semibold mb-2 text-left">{restaurant.name}</h3>
              <p className="text-orange-500 mb-1 text-left">Rating: {restaurant.rating}</p>
              <p className="text-gray-700 mb-2 text-left">{restaurant.description}</p>
              <button className="bg-black text-white px-4 py-2 rounded-md w-full hover:bg-gray-800 transition-all duration-300 ease-in-out">
                View Menu
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
