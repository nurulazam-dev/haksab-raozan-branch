import { useState } from "react";
import { motion } from "framer-motion";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import {
  gsBalancedata,
  gsBalanceStats,
} from "../../../../assets/data/gsBalanceData";

const GiyarbiSharifBalance = () => {
  // Pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 4;
  const totalPages = Math.ceil(gsBalancedata?.length / rowsPerPage);

  const paginatedData = gsBalancedata?.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className="px-6 text-slate-800">
      <h2 className="text-3xl font-bold mb-3 text-center text-blue-700">
        Giyarbi Sharif Balance
      </h2>

      {/* Giyarbi Sharif Balance Statistics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-5">
        {gsBalanceStats?.map((stat) => (
          <motion.div
            key={stat?.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white shadow-lg rounded-2xl px-6 py-4 flex items-center justify-between border border-gray-100"
          >
            <div>
              <p className="text-gray-500 text-sm">{stat?.title}</p>
              <h3 className="text-2xl font-semibold">{stat?.value}</h3>
            </div>
            <div className="p-3 bg-gray-100 rounded-full">{stat?.icon}</div>
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
              {paginatedData?.map((item, index) => (
                <tr
                  key={index}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-3">{item?.giyarbiSharifDate}</td>
                  <td className="px-4 py-3">{item?.arabicMonth}</td>
                  <td className="px-4 py-3 text-right text-green-600 font-medium">
                    {item?.totalIncome}
                  </td>
                  <td className="px-4 py-3 text-right text-red-600 font-medium">
                    {item?.totalCost}
                  </td>
                  <td className="px-4 py-3 text-right font-semibold text-blue-600">
                    {item?.balance}
                  </td>
                  <td className="px-4 py-3 text-center">
                    {item?.balanceCollector}
                  </td>
                  <td className="px-2 py-3 flex justify-center gap-4">
                    <FaEye className="text-green-600 text-lg cursor-pointer hover:scale-110 transition" />
                    <FaEdit className="text-blue-600 text-lg cursor-pointer hover:scale-110 transition" />
                    <FaTrash className="text-red-600 text-lg cursor-pointer hover:scale-110 transition" />
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
