import { useState } from "react";
import { motion } from "framer-motion";
import { FaDonate } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";

export default function AddGiyarbiSharifBalance() {
  const [formData, setFormData] = useState({
    donorName: "",
    amount: "",
    date: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("Balance record added successfully!");
    setFormData({ donorName: "", amount: "", date: "", description: "" });
  };

  return (
    <div className="flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-center text-indigo-600 flex items-center justify-center gap-2 mb-6">
          <FaDonate className="text-indigo-500" />
          Add Giyarbi Sharif Balance
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Giyarbi Sharif Date */}
          <div>
            <label className="text-gray-600 mb-1 font-medium flex items-center gap-2">
              <MdOutlineDateRange /> Giyarbi Sharif Date
            </label>
            <input
              type="date"
              name="giyarbiSharifDate"
              value={formData.giyarbiSharifDate}
              onChange={handleChange}
              placeholder="Enter Giyarbi Sharif date"
              required
              className="w-full border border-slate-500 rounded px-4 py-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>

          {/* Arabic Month */}
          <div>
            <label className="text-gray-600 mb-1 font-medium flex items-center gap-2">
              <MdOutlineDateRange /> Arabic Month
            </label>
            <input
              type="text"
              name="arabicMonth"
              value={formData.arabicMonth}
              onChange={handleChange}
              placeholder="Enter Arabic month"
              required
              className="w-full border border-slate-500 rounded px-4 py-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>

          {/* Income Amount */}
          <div>
            <label className="text-gray-600 mb-1 font-medium flex items-center gap-2">
              <FaDonate /> Total Income Amount (BDT)
            </label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              readOnly
              className="w-full border border-slate-500 rounded px-4 py-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>

          {/* Total Cost Amount */}
          <div>
            <label className="text-gray-600 mb-1 font-medium flex items-center gap-2">
              <FaDonate /> Total Cost Amount (BDT)
            </label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              readOnly
              className="w-full border border-slate-500 rounded px-4 py-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>

          {/* Balance */}
          <div>
            <label className="text-gray-600 mb-1 font-medium flex items-center gap-2">
              <FaDonate /> Balance (BDT)
            </label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              readOnly
              className="w-full border border-slate-500 rounded px-4 py-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>

          {/* Balance Collector */}
          <div>
            <label className="text-gray-600 mb-1 font-medium flex items-center gap-2">
              <AiOutlineUser /> Balance Collector
            </label>
            <input
              type="text"
              name="balanceCollector"
              value={formData.balanceCollector}
              onChange={handleChange}
              placeholder="Enter balance collector's name"
              required
              className="w-full border border-slate-500 rounded px-4 py-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>

          {/* Donor Name */}
          <div>
            <label className="text-gray-600 mb-1 font-medium flex items-center gap-2">
              <AiOutlineUser /> Donor Name
            </label>
            <input
              type="text"
              name="donorName"
              value={formData.donorName}
              onChange={handleChange}
              placeholder="Enter donor's name"
              required
              className="w-full border border-slate-500 rounded px-4 py-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>

          {/* Amount */}
          <div>
            <label className="text-gray-600 mb-1 font-medium flex items-center gap-2">
              <FaDonate /> Amount (BDT)
            </label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="Enter donation amount"
              required
              className="w-full border border-slate-500 rounded px-4 py-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg shadow-md transition duration-300"
          >
            Add Balance
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
