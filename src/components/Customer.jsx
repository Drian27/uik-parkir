import React from "react";

const Customer = () => {
  const customers = [
    {
      name: "Chat w/ Joshi Prakash",
      date: "05/12/2023 - 04:42PM",
      duration: "5 Min",
      amount: "₹199",
      discount: "No Discount",
      details: "View Details",
      freeMin: "",
    },
    {
      name: "Wallet Recharge",
      date: "06/12/2023 - 02:22AM",
      duration: "N/A",
      amount: "₹500",
      discount: "No Discount",
      details: "View Details",
      freeMin: "",
    },
    {
      name: "Chat w/ Namrata Limk...",
      date: "08/01/2024 - 04:16PM",
      duration: "25 Min",
      amount: "₹100",
      discount: "No Discount",
      details: "View Details",
      freeMin: "",
    },
    {
      name: "Chat w/ Jeetender Kum...",
      date: "02/01/2024 - 12:26PM",
      duration: "35 Min",
      amount: "₹200",
      discount: "No Discount",
      details: "View Details",
      freeMin: "",
    },
    {
      name: "Chat w/ Shesdhev Pandey",
      date: "12/06/2023 - 05:56PM",
      duration: "5 Min",
      amount: "₹0",
      discount: "5 Min Free",
      details: "View Details",
      freeMin: "5 Min Free",
    },
  ];

  return (
    <div className="mt-5 mx-auto px-4">
      <h1 className="text-xl font-semibold mb-4">Customers Overview</h1>
      <table className="min-w-full table-auto bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="px-4 py-2">Nama</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Duration</th>
            <th className="px-4 py-2">Transaction Amount</th>
            <th className="px-4 py-2">Discount</th>
            <th className="px-4 py-2">View Details</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr
              key={index}
              className="border-t"
            >
              <td className="px-4 py-2">{customer.name}</td>
              <td className="px-4 py-2">{customer.date}</td>
              <td className="px-4 py-2">{customer.duration}</td>
              <td className="px-4 py-2">{customer.amount}</td>
              <td className="px-4 py-2">
                {customer.freeMin ? (
                  <span className="text-blue-500">{customer.freeMin}</span>
                ) : (
                  customer.discount
                )}
              </td>
              <td className="px-4 py-2">
                <button className="bg-purple-500 text-white px-3 py-1 rounded">
                  {customer.details}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Customer;
