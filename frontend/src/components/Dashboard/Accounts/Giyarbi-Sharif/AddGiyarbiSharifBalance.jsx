import { useState } from "react";
import { motion } from "framer-motion";
import { FaDonate } from "react-icons/fa";
import { TbCurrencyTaka } from "react-icons/tb";
import { MdOutlineDateRange, MdPersonAdd } from "react-icons/md";
import { AiOutlineDelete, AiOutlineUser } from "react-icons/ai";
import FloatingLabelInput from "../../../Shared/FloatingLabelInput";
import TopBanner from "../../../Shared/TopBanner";

export default function AddGiyarbiSharifBalance() {
  const [formData, setFormData] = useState({
    giyarbiSharifDate: "",
    arabicMonth: "",
    balanceCollector: "",
    incomeEntries: [],
    costEntries: [],
  });

  // Handle main form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Add new income entry
  const addIncomeEntry = (e) => {
    e.preventDefault();
    setFormData((prev) => ({
      ...prev,
      incomeEntries: [
        ...prev.incomeEntries,
        { donarName: "", donationAmount: "" },
      ],
    }));
  };

  // Update income entry
  const handleIncomeEntryChange = (e, idx) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updated = [...prev.incomeEntries];
      updated[idx][name] = value;
      return { ...prev, incomeEntries: updated };
    });
  };

  // Delete income entry
  const deleteIncomeEntry = (e, idx) => {
    e.preventDefault();
    setFormData((prev) => ({
      ...prev,
      incomeEntries: prev.incomeEntries.filter((_, i) => i !== idx),
    }));
  };

  // Add new cost entry
  const addCostEntry = (e) => {
    e.preventDefault();
    setFormData((prev) => ({
      ...prev,
      costEntries: [...prev.costEntries, { costName: "", costAmount: "" }],
    }));
  };

  // Update cost entry
  const handleCostEntryChange = (e, idx) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updated = [...prev.costEntries];
      updated[idx][name] = value;
      return { ...prev, costEntries: updated };
    });
  };

  // Delete cost entry
  const deleteCostEntry = (e, idx) => {
    e.preventDefault();
    setFormData((prev) => ({
      ...prev,
      costEntries: prev.costEntries.filter((_, i) => i !== idx),
    }));
  };

  // Calculate totals
  const totalIncome = formData.incomeEntries.reduce(
    (sum, entry) => sum + (parseFloat(entry.donationAmount) || 0),
    0
  );
  const totalCost = formData.costEntries.reduce(
    (sum, entry) => sum + (parseFloat(entry.costAmount) || 0),
    0
  );
  const balance = totalIncome - totalCost;

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const submitData = {
      ...formData,
      totalIncome,
      totalCost,
      balance,
    };
    console.log("submit Data:", submitData);

    alert("Balance record added successfully!");
    setFormData({
      giyarbiSharifDate: "",
      arabicMonth: "",
      balanceCollector: "",
      incomeEntries: [],
      costEntries: [],
    });
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* top section */}
        <TopBanner />

        {/* Title */}
        <h2 className="text-2xl font-bold mb-4 text-center bg-green-600 text-white py-1 rounded-t-lg">
          Add Giyarbi Sharif Balance
        </h2>

        <form onSubmit={handleSubmit} className="text-slate-700">
          {/* Header part */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
            <FloatingLabelInput
              name="giyarbiSharifDate"
              type="date"
              value={formData.giyarbiSharifDate}
              onChange={handleChange}
              required
              placeholder="Giyarbi Sharif Date"
              icon={<MdOutlineDateRange />}
            />
            <FloatingLabelInput
              name="arabicMonth"
              type="text"
              value={formData.arabicMonth}
              onChange={handleChange}
              required
              placeholder="Arabic Month"
              icon={<MdOutlineDateRange />}
            />
            <FloatingLabelInput
              name="balanceCollector"
              type="text"
              value={formData.balanceCollector}
              onChange={handleChange}
              required
              placeholder="Balance Collector"
              icon={<AiOutlineUser />}
            />
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
            {/* Income Entries */}
            <div className="border border-green-600 px-3 py-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold text-center underline underline-offset-4 mb-3">
                Add Income
              </h2>
              {formData.incomeEntries.map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-center items-center mb-3 gap-2 w-full"
                >
                  {idx + 1}.{" "}
                  <div className="md:w-[68%] w-[63%]">
                    <FloatingLabelInput
                      name="donarName"
                      type="text"
                      value={item.donarName}
                      onChange={(e) => handleIncomeEntryChange(e, idx)}
                      required
                      placeholder="Donar Name"
                      icon={<AiOutlineUser />}
                    />
                  </div>
                  <div className="md:w-[29%] w-[34%]">
                    <FloatingLabelInput
                      name="donationAmount"
                      type="number"
                      min="0"
                      value={item.donationAmount}
                      onChange={(e) => handleIncomeEntryChange(e, idx)}
                      required
                      placeholder="Amount"
                      icon={<FaDonate />}
                    />
                  </div>
                  <div className="w-[3%]">
                    <button
                      onClick={(e) => deleteIncomeEntry(e, idx)}
                      type="button"
                      className="text-[16px] bg-red-600 p-1 rounded-full text-white cursor-pointer"
                      aria-label="Delete income entry"
                    >
                      <AiOutlineDelete />
                    </button>
                  </div>
                </div>
              ))}
              <div className="flex justify-end pt-4">
                <button
                  onClick={addIncomeEntry}
                  type="button"
                  className="flex items-center gap-2 border border-green-600 px-2 py-1 rounded-full cursor-pointer hover:bg-green-100 transition"
                >
                  <MdPersonAdd className="text-green-600 text-3xl mx-auto" />
                  Add One
                </button>
              </div>
            </div>

            {/* Cost Entries */}
            <div className="border border-red-600 px-3 py-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold text-center underline underline-offset-4 mb-3">
                Add Cost
              </h2>
              {formData.costEntries.map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-center items-center mb-3 gap-2 w-full"
                >
                  {idx + 1}.{" "}
                  <div className="md:w-[68%] w-[63%]">
                    <FloatingLabelInput
                      name="costName"
                      type="text"
                      value={item.costName}
                      onChange={(e) => handleCostEntryChange(e, idx)}
                      required
                      placeholder="Cost Name"
                      icon={<MdPersonAdd />}
                    />
                  </div>
                  <div className="md:w-[29%] w-[34%]">
                    <FloatingLabelInput
                      name="costAmount"
                      type="number"
                      min="0"
                      value={item.costAmount}
                      onChange={(e) => handleCostEntryChange(e, idx)}
                      required
                      placeholder="Amount"
                      icon={<FaDonate />}
                    />
                  </div>
                  <div className="w-[3%]">
                    <button
                      onClick={(e) => deleteCostEntry(e, idx)}
                      type="button"
                      className="text-[16px] bg-red-600 p-1 rounded-full text-white cursor-pointer"
                      aria-label="Delete cost entry"
                    >
                      <AiOutlineDelete />
                    </button>
                  </div>
                </div>
              ))}
              <div className="flex justify-end pt-4">
                <button
                  onClick={addCostEntry}
                  type="button"
                  className="flex items-center gap-1 border border-red-600 px-2 py-1 rounded-full cursor-pointer hover:bg-red-100 transition"
                >
                  <TbCurrencyTaka className="text-red-600 text-3xl mx-auto" />
                  Add One
                </button>
              </div>
            </div>
          </section>

          {/* Statistics Section */}
          <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
            <div className="shadow-lg p-4 rounded-lg border border-slate-300">
              <h2 className="text-xl font-bold text-center underline underline-offset-4 mb-3">
                Total Income
              </h2>
              <div className="flex items-center gap-2">
                <FaDonate className="text-green-600 text-2xl" />
                <input
                  type="number"
                  name="totalIncome"
                  value={totalIncome}
                  disabled
                  className="border-none bg-transparent"
                  tabIndex={-1}
                  aria-label="Total Income"
                />
              </div>
            </div>
            <div className="shadow-lg p-4 rounded-lg border border-slate-300">
              <h2 className="text-xl font-bold text-center underline underline-offset-4 mb-3">
                Total Cost
              </h2>
              <div className="flex items-center gap-2">
                <FaDonate className="text-green-600 text-2xl" />
                <input
                  type="number"
                  name="totalCost"
                  value={totalCost}
                  disabled
                  className="border-none bg-transparent"
                  tabIndex={-1}
                  aria-label="Total Cost"
                />
              </div>
            </div>
            <div className="shadow-lg p-4 rounded-lg border border-slate-300">
              <h2 className="text-xl font-bold text-center underline underline-offset-4 mb-3">
                Balance
              </h2>
              <div className="flex items-center gap-2">
                <FaDonate className="text-green-600 text-2xl" />
                <input
                  type="number"
                  name="balance"
                  value={balance}
                  disabled
                  className="border-none bg-transparent"
                  tabIndex={-1}
                  aria-label="Balance"
                />
              </div>
            </div>
          </section>

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
