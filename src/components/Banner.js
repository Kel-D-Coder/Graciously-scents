import React from 'react';


export const Banner = () => {
  return (
    <div 
      className="relative py-16 text-center bg-cover bg-center" 
      style={{ backgroundImage: `url(https://perfumegyaan.com/wp-content/uploads/2023/08/How-to-apply-perfume.jpg)` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-pink-400 via-pink-200 to-transparent opacity-70"></div>
      <div className="flex flex-col items-center relative z-10">
        <h2 className="text-4xl font-extrabold text-white mb-4 drop-shadow-lg">Fall in Love with Amazing Aromas</h2>
        <p className="text-lg text-white mb-6 max-w-md mx-auto">
          Discover our exclusive collection of fragrances that will captivate your senses and leave a lasting impression.
        </p>
        <button className="bg-yellow-500 text-black py-2 px-6 rounded-full text-lg font-semibold hover:bg-yellow-400 transition-all duration-300">
          Shop Now
        </button>
      </div>
    </div>
  );
};

