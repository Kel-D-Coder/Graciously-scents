import React from "react";

export const AccountSection = () => {
  const accountName = "Jane Doe"; // Replace with the actual account holder's name
  const accountNumber = "1234 5678 9012 3456"; // Replace with the actual account number
  const bankName = "Global Bank Ltd."; // Replace with the actual bank name

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Account Information
          </h2>
          <p className="text-gray-600 mb-6">
            Below are the details for your transactions:
          </p>
          <div className="space-y-4">
            {/* Account Name */}
            <div>
              <p className="text-gray-500 font-medium">Account Holder</p>
              <div className="bg-gray-100 text-gray-800 font-bold text-lg py-2 px-6 rounded-lg border border-gray-300 inline-block">
                {accountName}
              </div>
            </div>

            {/* Bank Name */}
            <div>
              <p className="text-gray-500 font-medium">Bank Name</p>
              <div className="bg-gray-100 text-gray-800 font-bold text-lg py-2 px-6 rounded-lg border border-gray-300 inline-block">
                {bankName}
              </div>
            </div>

            {/* Account Number */}
            <div>
              <p className="text-gray-500 font-medium">Account Number</p>
              <div className="bg-gray-100 text-gray-800 font-bold text-lg py-2 px-6 rounded-lg border border-gray-300 inline-block">
                {accountNumber}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
