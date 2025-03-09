const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "The Secret Ingredients of Our Signature Dishes",
      excerpt: "Discover the unique flavors that make our dishes unforgettable.",
      image: "https://www.thedailymeal.com/img/gallery/14-chefs-reveal-the-secret-ingredients-they-use-in-their-favorite-dishes/intro-1672503194.jpg",
      date: "March 7, 2025",
    },
    {
      id: 2,
      title: "5 Must-Try Dishes at Our Restaurant",
      excerpt: "A guide to the best meals you shouldn’t miss when you visit us.",
      image: "https://content.jdmagicbox.com/quickquotes/listicle/listicle_1719423236106_lrr7z_1000x664.jpg?impolicy=queryparam&im=Resize=(847,400),aspect=fit&q=75",
      date: "March 5, 2025",
    },
    {
      id: 3,
      title: "How We Source Our Fresh Ingredients Locally",
      excerpt: "Learn about our commitment to fresh, locally-sourced ingredients.",
      image: "https://media.istockphoto.com/id/1155240408/photo/table-filled-with-large-variety-of-food.jpg?s=612x612&w=0&k=20&c=uJEbKmR3wOxwdhQR_36as5WeP6_HDqfU-QmAq63OVEE=",
      date: "March 1, 2025",
    },
  ];

  return (
    <section className="py-12 bg-white-100 flex justify-center lg:h-[700px] items-center">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Latest from Our Blog</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
          {blogs.map((blog) => (
            <div 
              key={blog.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden p-3 transform transition duration-300 hover:scale-105 hover:shadow-2xl w-full max-w-xs mx-auto"
            >
              <img 
                src={blog.image} 
                alt={blog.title} 
                className="w-full h-40 object-cover rounded-lg" 
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{blog.title}</h3>
                <p className="text-gray-600 mt-2 text-sm">{blog.excerpt}</p>
                <p className="text-xs text-gray-500 mt-2">{blog.date}</p>
                <button className="mt-4 px-3 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 text-sm">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
