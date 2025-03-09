// const About = () => {
//   return (
//     <section className="py-12 bg-white flex justify-center md:h-[700px]">
//       <div className="container mx-auto px-6 text-center md:text-left flex flex-col md:flex-row items-center md:gap-12 h-full">
//         {/* Image Section */}
//         <div className="w-full md:w-1/2 flex justify-center">
//           <img 
//             src="https://media.istockphoto.com/id/1457092074/photo/baked-salmon-fillet-with-vegetables.jpg?s=612x612&w=0&k=20&c=-SJTxJVfbClzu5SOVL8VqkQ1AmHn8OH5wc-fvVFxpuI=" 
//             alt="Restaurant Interior" 
//             className="rounded-2xl shadow-lg w-full max-w-md md:max-w-full"
//           />
//         </div>

//         {/* Text Content */}
//         <div className="w-full md:w-1/2 mt-6 md:mt-0">
//           <h2 className="text-3xl font-bold text-gray-800">About Our Service</h2>
//           <p className="text-gray-600 mt-4 leading-relaxed">
//             Welcome to our Services, where passion meets flavor. We take pride in serving delicious, 
//             high-quality dishes made from the freshest ingredients. Our chefs bring years of experience 
//             and creativity to craft a dining experience that delights every guest.
//           </p>
//           <p className="text-gray-600 mt-4 leading-relaxed">
//             Whether you're here for a casual meal or a special occasion, our warm and inviting ambiance, 
//             combined with our exceptional service, ensures an unforgettable dining experience. Come 
//             taste the difference today!
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-12 bg-white flex justify-center md:h-[700px]">
      <div className="container mx-auto px-6 text-center md:text-left flex flex-col md:flex-row items-center md:gap-12 h-full">
        
        {/* Image Section */}
        <motion.div 
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <figure>
            <img 
              src="https://media.istockphoto.com/id/1457092074/photo/baked-salmon-fillet-with-vegetables.jpg?s=612x612&w=0&k=20&c=-SJTxJVfbClzu5SOVL8VqkQ1AmHn8OH5wc-fvVFxpuI=" 
              alt="Delicious Salmon Dish" 
              className="rounded-2xl shadow-lg w-full max-w-lg md:max-w-full"
            />
          </figure>
        </motion.div>

        {/* Text Content */}
        <motion.div 
          className="w-full md:w-1/2 mt-6 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-gray-800">About Our Culinary Experience</h2>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Welcome to our culinary experience, where passion meets flavor. We take pride in serving 
            delicious, high-quality dishes made from the freshest ingredients. Our chefs bring years of 
            expertise and creativity to craft a dining experience that delights every guest.
          </p>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Whether you're here for a casual meal or a special occasion, our warm ambiance and exceptional 
            service ensure an unforgettable dining experience. Come taste the difference today!
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
