import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
// import 

export const ProductSection = () => {
  const products = [
    {
      id: 1,
      image: 'https://www.ogbeauty.in/cdn/shop/files/Smokey_Listing_image2.jpg?v=1706684821', // Replace with actual product image
      name: 'De Givenchy Angelic',
      price: '$100',
      sale: true,
    },
    {
      id: 2,
      image: 'https://bellavitaorganic.com/cdn/shop/files/1_bcc1eae3-90b6-4b4c-91c1-56a89bf98b3c.jpg?v=1728030384&width=1000', // Replace with actual product image
      name: 'Di Sard Perfume',
      price: '$120',
      sale: true,
    },
    {
      id: 3,
      image: 'https://i5.walmartimages.com/seo/Novoglow-Lady-Perfume-for-Women-Eau-de-Parfum-Spray-for-Women-3-4-fl-oz_a3f689ea-436b-4780-897c-8887f8d917df_1.4f09d28d255e8fe8c7da70ea5bcba81d.jpeg', // Replace with actual product image
      name: 'Douce Ambre',
      price: '$80',
      sale: true,
    },
    {
      id: 4,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5GG3dTPoQ9ydzgdlLXDRzRxLpEqgOjaxfNVJz2p5wt2NcXtYHQ9AeEfrKqbkEJDS9GaI&usqp=CAU', // Replace with actual product image
      name: 'Uomo Intense',
      price: '$90',
      sale: false,
    },
    {
      id: 5,
      image: 'https://down-my.img.susercontent.com/file/my-11134207-7rasm-m1p9gfmml99j24', // Replace with actual product image
      name: 'Fragrance X',
      price: '$70',
      sale: false,
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">New Arrivals</h2>
          <p className="text-gray-600 mt-2">
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical literature.
          </p>
        </div>
        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="w-full"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="bg-white p-4 shadow rounded-lg">
                {/* Sale Badge */}
                {product.sale && (
                  <span className="text-xs bg-red-500 text-white px-2 py-1 rounded absolute">
                    SALE
                  </span>
                )}
                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-60 object-cover mb-4"
                />
                {/* Product Name */}
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                {/* Product Price */}
                <p className="text-gray-600 mt-2">{product.price}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
