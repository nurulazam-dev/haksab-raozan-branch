import { useState } from "react";
import { motion } from "framer-motion";
import { FaDonate } from "react-icons/fa";
import { MdDescription, MdOutlineDateRange } from "react-icons/md";
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
    <div className="flex justify-center items-center py-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-xl rounded-2xl w-full max-w-2xl p-8"
      >
        <h2 className="text-2xl font-bold text-center text-indigo-600 flex items-center justify-center gap-2 mb-6">
          <FaDonate className="text-indigo-500" />
          Add Giyarbi Sharif Balance
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Donor Name */}
          <div>
            <label className="block text-gray-600 mb-1 font-medium flex items-center gap-2">
              <AiOutlineUser /> Donor Name
            </label>
            <input
              type="text"
              name="donorName"
              value={formData.donorName}
              onChange={handleChange}
              placeholder="Enter donor's name"
              required
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
            />
          </div>

          {/* Amount */}
          <div>
            <label className="block text-gray-600 mb-1 font-medium flex items-center gap-2">
              <FaDonate /> Amount (BDT)
            </label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="Enter donation amount"
              required
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block text-gray-600 mb-1 font-medium flex items-center gap-2">
              <MdOutlineDateRange /> Date
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-600 mb-1 font-medium flex items-center gap-2">
              <MdDescription /> Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Write a short note (optional)"
              rows="3"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none resize-none"
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
