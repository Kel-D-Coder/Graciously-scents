import React from 'react';
import LandingPic from '../imgs/landingPic.png'
import { ProductSection } from '../components/ProductSection';
import { Banner } from '../components/Banner';
import { Link, useNavigate } from 'react-router-dom'

const FeaturedProduct = [
    {
        image: "https://i.pinimg.com/originals/6a/8b/09/6a8b099cbc612b4b34420ff524c6f1c1.gif",
        text: "Fall in Love with Amazing Aromas",
    },
    {
        image: "https://img.freepik.com/premium-photo/fragrances_717774-169266.jpg",
        text: "Fall in Love with Amazing Aromas",
    },
    {
        image: "https://i.imgur.com/WB8mDf6.gif",
        text: "Fall in Love with Amazing Aromas",
    }
]

export const HomePage = () => {
    const navigate = useNavigate()
  return (
    <div className="bg-red-50">

      {/* Hero Section */}
        <section className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold text-gray-900">
                20% <span className="text-black">Sell Off</span>
            </h2>
            <p className="text-gray-600 mt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. It is a long established fact that a reader.
            </p>
            <button className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800" onClick={() => navigate('/products')}>
                SHOP NOW
            </button>
            </div>
            <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
            <img
                src={LandingPic}
                alt="Perfume Bottles"
                className="w-2/3 md:w-full object-contain"
            />
            </div>
        </section>
          
        <ProductSection />
        <Banner />
          

        <div className="container mx-auto py-16 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    FeaturedProduct.map(product => (
                        
                    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                        <img
                            src={product.image} // Replace with your image URL
                            alt="Banner Image 1"
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-lg lg:text-xl font-semibold text-gray-800 mb-4">
                                {product.text}
                            </h3>
                            <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-full transition-transform transform hover:scale-105" onClick={() => navigate('/products')}>
                                Show More
                            </button>
                        </div>
                    </div>
                    ))
                }
            </div>
        </div>

    </div>


  );
};
