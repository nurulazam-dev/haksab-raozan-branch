import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { gsBalancedata } from "../../../../assets/data/gsBalanceData";
import GSBalanceStatistics from "./GSBalanceStatistics";

const GiyarbiSharifBalance = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteItem, setDeleteItem] = useState(null);

  const navigate = useNavigate();

  // Pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 4;
  const totalPages = Math.ceil(gsBalancedata?.length / rowsPerPage);

  const paginatedData = gsBalancedata?.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  // Handle Delete
  const handleDelete = (item) => {
    setDeleteItem(item);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    console.log("Deleted:", deleteItem);
    // TODO: call API here
    setShowDeleteModal(false);
    setDeleteItem(null);
    alert("Balance record deleted successfully!");
  };

  return (
    <div className="px-6 text-slate-800">
      <h2 className="text-3xl font-bold mb-3 text-center text-blue-700">
        Giyarbi Sharif Balance
      </h2>

      {/* Giyarbi Sharifs Balance Statistics */}
      <GSBalanceStatistics />

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
                    <FaEye
                      onClick={() =>
                        navigate(
                          `/dashboard/giyarbi-sharif-balance/details/${item?.id}`
                        )
                      }
                      className="text-green-600 text-lg cursor-pointer hover:scale-110 transition"
                    />
                    <FaEdit
                      onClick={() =>
                        navigate(
                          `/dashboard/giyarbi-sharif-balance/update/${item?.id}`
                        )
                      }
                      className="text-blue-600 text-lg cursor-pointer hover:scale-110 transition"
                    />
                    <FaTrash
                      onClick={() => handleDelete(item)}
                      className="text-red-600 text-lg cursor-pointer hover:scale-110 transition"
                    />
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

      {/* Delete Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white p-6 rounded-lg shadow-lg w-[90%] md:w-[400px] text-center"
          >
            <h2 className="text-lg font-bold mb-4">
              Are you sure you want to delete?
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              This action cannot be undone.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default GiyarbiSharifBalance;
