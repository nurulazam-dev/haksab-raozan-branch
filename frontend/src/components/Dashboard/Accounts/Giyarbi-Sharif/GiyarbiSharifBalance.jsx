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
      income: 1200,
      cost: 600,
      balance: 600,
      collector: "Khalid",
    },
    {
      date: "2023-04-01",
      arabicMonth: "ربيع الآخر",
      income: 1800,
      cost: 800,
      balance: 1000,
      collector: "Hasan",
    },
    {
      date: "2023-05-01",
      arabicMonth: "جمادى الأولى",
      income: 2000,
      cost: 900,
      balance: 1100,
      collector: "Rafiq",
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

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 3;
  const totalPages = Math.ceil(gsBalance.length / rowsPerPage);

  const currentRows = gsBalance.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className="p-6 text-slate-800">
      <h2 className="text-2xl font-bold mb-6 text-center">
        📊 Giyarbi Sharif Balance
      </h2>

      {/* statistics cards */}
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

      {/* data table */}
      <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-600 text-sm uppercase tracking-wider">
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Arabic Month</th>
              <th className="py-3 px-4 text-right">Income</th>
              <th className="py-3 px-4 text-right">Cost</th>
              <th className="py-3 px-4 text-right">Balance</th>
              <th className="py-3 px-4">Collector</th>
              <th className="py-3 px-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((item, index) => (
              <motion.tr
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="hover:bg-gray-50 border-b"
              >
                <td className="py-3 px-4">{item.date}</td>
                <td className="py-3 px-4">{item.arabicMonth}</td>
                <td className="py-3 px-4 text-right text-green-600 font-medium">
                  {item.income}
                </td>
                <td className="py-3 px-4 text-right text-red-600 font-medium">
                  {item.cost}
                </td>
                <td className="py-3 px-4 text-right font-semibold">
                  {item.balance}
                </td>
                <td className="py-3 px-4">{item.collector}</td>
                <td className="py-3 px-4 flex justify-center items-center gap-3">
                  <FaEdit className="text-blue-600 cursor-pointer hover:scale-110 transition" />
                  <FaTrash className="text-red-600 cursor-pointer hover:scale-110 transition" />
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 text-sm bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50"
          >
            Prev
          </button>
          <p className="text-sm text-gray-600">
            Page {currentPage} of {totalPages}
          </p>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 text-sm bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default GiyarbiSharifBalance;
