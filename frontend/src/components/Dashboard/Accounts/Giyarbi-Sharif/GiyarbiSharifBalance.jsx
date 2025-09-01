import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowDown,
  FaArrowUp,
  FaBalanceScale,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

const GiyarbiSharifBalance = () => {
  const gsBalance = [
    {
      date: "2023-01-01",
      arabicMonth: "محرم",
      income: 1000,
      cost: 500,
      balance: 500,
      collector: "Roman",
    },
    {
      date: "2023-02-01",
      arabicMonth: "صفر",
      income: 1500,
      cost: 700,
      balance: 800,
      collector: "Arif",
    },
    {
      date: "2023-03-01",
      arabicMonth: "ربيع الأول",
      income: 2000,
      cost: 1200,
      balance: 800,
      collector: "Imran",
    },
    {
      date: "2023-04-01",
      arabicMonth: "ربيع الثاني",
      income: 1800,
      cost: 900,
      balance: 900,
      collector: "Hasan",
    },
    {
      date: "2023-05-01",
      arabicMonth: "جمادى الأولى",
      income: 2500,
      cost: 1100,
      balance: 1400,
      collector: "Karim",
    },
  ];

  const stats = [
    {
      id: 1,
      title: "Total Income",
      value: gsBalance.reduce((acc, item) => acc + item.income, 0),
      icon: <FaArrowUp className="text-green-500 text-xl" />,
    },
    {
      id: 2,
      title: "Total Cost",
      value: gsBalance.reduce((acc, item) => acc + item.cost, 0),
      icon: <FaArrowDown className="text-red-500 text-xl" />,
    },
    {
      id: 3,
      title: "Current Balance",
      value: gsBalance.reduce((acc, item) => acc + item.balance, 0),
      icon: <FaBalanceScale className="text-blue-500 text-xl" />,
    },
  ];

  // Pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 4;
  const totalPages = Math.ceil(gsBalance.length / rowsPerPage);

  const paginatedData = gsBalance.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className="px-6 text-slate-800">
      <h2 className="text-3xl font-bold mb-3 text-center text-blue-700">
        Giyarbi Sharif Balance
      </h2>

      {/* Statistics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8">
        {stats.map((stat) => (
          <motion.div
            key={stat.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white shadow-lg rounded-2xl p-6 flex items-center justify-between border border-gray-100"
          >
            <div>
              <p className="text-gray-500 text-sm">{stat.title}</p>
              <h3 className="text-2xl font-semibold">{stat.value}</h3>
            </div>
            <div className="p-3 bg-gray-100 rounded-full">{stat.icon}</div>
          </motion.div>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white shadow-lg rounded-md border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="bg-gray-200 text-gray-700 uppercase text-xs sticky top-0">
              <tr>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Arabic Month</th>
                <th className="px-4 py-3 text-right">Income</th>
                <th className="px-4 py-3 text-right">Cost</th>
                <th className="px-4 py-3 text-right">Balance</th>
                <th className="px-4 py-3 text-center">Collector</th>
                <th className="px-4 py-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((item, index) => (
                <tr
                  key={index}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-3">{item.date}</td>
                  <td className="px-4 py-3">{item.arabicMonth}</td>
                  <td className="px-4 py-3 text-right text-green-600 font-medium">
                    {item.income}
                  </td>
                  <td className="px-4 py-3 text-right text-red-600 font-medium">
                    {item.cost}
                  </td>
                  <td className="px-4 py-3 text-right font-semibold text-blue-600">
                    {item.balance}
                  </td>
                  <td className="px-4 py-3 text-center">{item.collector}</td>
                  <td className="px-4 py-3 flex justify-center gap-3">
                    <FaEdit className="text-blue-600 cursor-pointer hover:scale-110 transition" />
                    <FaTrash className="text-red-600 cursor-pointer hover:scale-110 transition" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center p-4 border-t bg-gray-50">
          <button
            className="px-3 py-1 bg-blue-500 text-white rounded disabled:opacity-50"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <span className="text-gray-600 text-sm">
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="px-3 py-1 bg-blue-500 text-white rounded disabled:opacity-50"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default GiyarbiSharifBalance;
