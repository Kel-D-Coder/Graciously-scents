import React, { useState } from "react";
import { AccountSection } from "../components/AccountSection";

export const ProductPage = () => {
  // Sample fragrance data
  const fragrances = [
    { id: 1, name: "Fragrance 1", price: "$50", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Fragrance 2", price: "$60", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Fragrance 3", price: "$40", image: "https://via.placeholder.com/150" },
    { id: 4, name: "Fragrance 4", price: "$70", image: "https://via.placeholder.com/150" },
    { id: 5, name: "Fragrance 5", price: "$55", image: "https://via.placeholder.com/150" },
    { id: 6, name: "Fragrance 6", price: "$65", image: "https://via.placeholder.com/150" },
    { id: 7, name: "Fragrance 7", price: "$45", image: "https://via.placeholder.com/150" },
    { id: 8, name: "Fragrance 8", price: "$75", image: "https://via.placeholder.com/150" },
    { id: 9, name: "Fragrance 9", price: "$80", image: "https://via.placeholder.com/150" },
    { id: 10, name: "Fragrance 10", price: "$90", image: "https://via.placeholder.com/150" },
    { id: 11, name: "Fragrance 11", price: "$85", image: "https://via.placeholder.com/150" },
    { id: 12, name: "Fragrance 12", price: "$95", image: "https://via.placeholder.com/150" },
  ];

  const itemsPerPage = 6; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the total number of pages
  const totalPages = Math.ceil(fragrances.length / itemsPerPage);

  // Get the fragrances to display for the current page
  const currentItems = fragrances.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold text-center mb-8">Our Fragrances</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {currentItems.map((fragrance) => (
            <div
              key={fragrance.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={fragrance.image}
                alt={fragrance.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{fragrance.name}</h2>
                <p className="text-gray-600">{fragrance.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-8 space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 rounded ${
                currentPage === index + 1
                  ? "bg-pink-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        </div>
        <AccountSection />
    </div>
  );
};
