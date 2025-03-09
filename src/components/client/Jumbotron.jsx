import { React, useState, useEffect } from "react";

const plateImages = [
  "https://media.istockphoto.com/id/1372205267/photo/traditional-indian-food-thali-served-in-plate-top-view.jpg?s=612x612&w=0&k=20&c=4bbfcgQSgdlv3CClnvt064mz1nk_mgiPC6--cj2m4J0=",
  "https://media.istockphoto.com/id/1190330112/photo/fried-pork-and-vegetables-on-white-background.jpg?s=612x612&w=0&k=20&c=TzvLLGGvPAmxhKJ6fz91UGek-zLNNCh4iq7MVWLnFwo=",
  "https://media.istockphoto.com/id/1056419208/photo/grilled-chicken-breast-and-vegetables.jpg?s=612x612&w=0&k=20&c=_seZ-9HcA9Pty-OGkNsUh9dFiGhIPhCXBTKTkmFIFi8="
];

const Jumbotron = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % plateImages.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="bg-cover bg-center h-[90vh] flex flex-col-reverse md:flex-row items-center justify-center text-black px-4 md:px-8"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/grungy-white-background-natural-cement-stone-old-texture-as-retro-pattern-wall-conceptual-wall-banner-grunge-material-construction_1258-70382.jpg?semt=ais_hybrid')",
      }}
    >
      <div className="flex flex-col items-center md:flex-row md:items-center md:justify-center w-full">
        <div className="mt-4 md:mt-8 md:mr-8 flex justify-center">
          <img
            src={plateImages[currentImage]}
            alt="Rotating Plate"
            className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-full transition-opacity duration-1000"
          />
        </div>
        <div className="max-w-lg mb-6 md:mb-0 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Welcome to Duke's Table</h1>
          <p className="text-base md:text-lg mb-4">
            Enjoy the best dining experience with our exclusive menu and top-notch service.
          </p>
          <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-orange-500">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
