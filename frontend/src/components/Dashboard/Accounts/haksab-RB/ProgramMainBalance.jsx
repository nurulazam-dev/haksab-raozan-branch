import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { programBalancedata } from "../../../../assets/data/programBalanceData";
import GSBalanceStatistics from "../Giyarbi-Sharif/GSBalanceStatistics";
import TopBanner from "../../../Shared/TopBanner";

const ProgramMainBalance = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteItem, setDeleteItem] = useState(null);

  const navigate = useNavigate();

  // Pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;
  const totalPages = Math.ceil(programBalancedata?.length / rowsPerPage);

  const paginatedData = programBalancedata?.slice(
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
    <div className="px-1 text-slate-800">
      {/* top section */}
      <TopBanner />

      {/* Title */}
      <h2 className="text-2xl font-bold mb-4 text-center bg-green-600 text-white py-1 rounded-t-lg">
        Program Balance
      </h2>

      {/* Program Balance Statistics */}
      <GSBalanceStatistics />

      {/* Table */}
      <div className="bg-white shadow-lg rounded-md border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="bg-gray-200 text-gray-700 uppercase text-xs sticky top-0">
              <tr className="text-center">
                <th className="p-3 border-r-[1px] border-gray-400">#</th>
                <th className="p-3 border-r-[1px] border-gray-400">Date</th>
                <th className="p-3 border-r-[1px] border-gray-400">Day</th>
                <th className="p-3 border-r-[1px] border-gray-400">B. Type</th>
                <th className="p-3 border-r-[1px] border-gray-400">Program</th>
                <th className="p-3 border-r-[1px] border-gray-400">Income</th>
                <th className="p-3 border-r-[1px] border-gray-400">Cost</th>
                <th className="p-3 border-r-[1px] border-gray-400">Balance</th>
                <th className="p-3 border-r-[1px] border-gray-400">
                  Collector
                </th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData?.map((item, index) => (
                <tr
                  key={index}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="p-2 border-r-[1px] border-gray-400">
                    {item?.id}
                  </td>
                  <td className="p-2 border-r-[1px] border-gray-400">
                    {item?.programDate}
                  </td>
                  <td className="p-2 border-r-[1px] border-gray-400">
                    {item?.programDay}
                  </td>
                  <td className="p-2 border-r-[1px] border-gray-400">
                    {item?.balanceType}
                  </td>
                  <td className="p-2 border-r-[1px] border-gray-400">
                    {item?.programName}
                  </td>
                  <td className="p-2 text-right text-green-600 font-medium border-r-[1px] border-gray-400">
                    {item?.totalIncome}
                  </td>
                  <td className="p-2 text-right text-red-600 font-medium border-r-[1px] border-gray-400">
                    {item?.totalCost}
                  </td>
                  <td className="p-2 text-right font-semibold text-blue-600 border-r-[1px] border-gray-400">
                    {item?.balance}
                  </td>
                  <td className="p-2 text-center border-r-[1px] border-gray-400">
                    {item?.balanceCollector}
                  </td>
                  <td className="p-2 flex justify-center gap-4">
                    <FaEye
                      onClick={() =>
                        navigate(
                          `/dashboard/program-balance/details/${item?.id}`
                        )
                      }
                      className="text-green-600 text-lg cursor-pointer hover:scale-110 transition"
                    />
                    <FaEdit
                      onClick={() =>
                        navigate(
                          `/dashboard/program-balance/update/${item?.id}`
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

export default ProgramMainBalance;
