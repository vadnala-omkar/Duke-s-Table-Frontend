const RestaurantsList = () => {
    const restaurants = [
      {
        id: 1,
        name: "paradise Restaurant",
        image: "https://media-cdn.tripadvisor.com/media/photo-m/1280/16/1b/44/94/paradise-restaurant.jpg",
        offer: "20% Off on First Order",
        area: "kothapet",
        rating: 4.5,
        cuisine: "south-indian, north-indian",
      },
      {
        id: 2,
        name: "Swagath Grand",
        image: "https://image.wedmegood.com/resized/720X/uploads/member/758569/1570436544_Screenshot_1.png",
        offer: "Buy 1 Get 1 Free",
        area: "Karmanghat",
        rating: 4.2,
        cuisine: "Indian, Thai",
      },
      {
        id: 3,
        name: "shubham palace ",
        image: "https://r1imghtlak.mmtcdn.com/67791b4e232911eaaa250ac254d2bca4.jpg",
        offer: "Free Dessert",
        area: "Karmanghat",
        rating: 4.8,
        cuisine: "south-indian",
      },
      {
        id: 4,
        name: "mcdonald's",
        image: "https://www.investopedia.com/thmb/a_tD7rBwlEFRJGL-yuZnbE7lnZY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/shutterstock_523483492-mcdonalds-5988b1ffc412440010f2d0b9.jpg",
        offer: "15% Off on Family Meals",
        area: "Karmanghat",
        rating: 4.3,
        cuisine: "Pizza, Burger",
      },
      
      
    ];
  
    return (
      <section className="py-12 bg-white flex justify-center mt-5 h-auto lg:h-[700px] lg:h-auto items-center">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Explore Our Restaurants</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
            {restaurants.map((restaurant) => (
              <div 
                key={restaurant.id} 
                className="bg-gray-100 rounded-xl shadow-lg overflow-hidden p-4 transform transition duration-300 hover:scale-105 hover:shadow-2xl w-full max-w-xs mx-auto"
              >
                <img 
                  src={restaurant.image} 
                  alt={restaurant.name} 
                  className="w-full h-40 object-cover rounded-lg" 
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">{restaurant.name}</h3>
                  <p className="text-gray-600 mt-2 text-sm">{restaurant.cuisine}</p>
                  <p className="text-sm text-gray-500 mt-2">⭐ {restaurant.rating}</p>
                  <p className="text-sm text-green-600 font-semibold mt-2">{restaurant.offer}</p>
                  <p className="text-sm text-gray-500 mt-2">📍 {restaurant.area}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default RestaurantsList;
  