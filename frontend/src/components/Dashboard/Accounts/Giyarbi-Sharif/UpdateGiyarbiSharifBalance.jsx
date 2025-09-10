import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaDonate } from "react-icons/fa";
import { TbCurrencyTaka } from "react-icons/tb";
import { MdOutlineDateRange, MdPersonAdd } from "react-icons/md";
import { AiOutlineDelete, AiOutlineUser } from "react-icons/ai";
import FloatingLabelInput from "../../../Shared/FloatingLabelInput";
import { gsBalancedata } from "../../../../assets/data/gsBalanceData";
import { useParams } from "react-router-dom";
import TopBanner from "../../../Shared/TopBanner";

// export default function UpdateGiyarbiSharifBalance({ initialData, onUpdate }) {
export default function UpdateGiyarbiSharifBalance({ onUpdate }) {
  /* ========================== */
  const { id } = useParams(); // get id from URL
  const getBalance = gsBalancedata.find((item) => item.id === id);
  /* ========================== */

  const [formData, setFormData] = useState({
    giyarbiSharifDate: "",
    arabicMonth: "",
    balanceCollector: "",
    incomeEntries: [],
    costEntries: [],
  });

  // Load existing data into form
  /* useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]); */

  useEffect(() => {
    if (getBalance) {
      setFormData(getBalance);
    }
  }, [getBalance]);

  // Handle main input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Income Entry CRUD
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

  const handleIncomeEntryChange = (e, idx) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updated = [...prev.incomeEntries];
      updated[idx][name] = value;
      return { ...prev, incomeEntries: updated };
    });
  };

  const deleteIncomeEntry = (e, idx) => {
    e.preventDefault();
    setFormData((prev) => ({
      ...prev,
      incomeEntries: prev.incomeEntries.filter((_, i) => i !== idx),
    }));
  };

  // Cost Entry CRUD
  const addCostEntry = (e) => {
    e.preventDefault();
    setFormData((prev) => ({
      ...prev,
      costEntries: [...prev.costEntries, { costName: "", costAmount: "" }],
    }));
  };

  const handleCostEntryChange = (e, idx) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updated = [...prev.costEntries];
      updated[idx][name] = value;
      return { ...prev, costEntries: updated };
    });
  };

  const deleteCostEntry = (e, idx) => {
    e.preventDefault();
    setFormData((prev) => ({
      ...prev,
      costEntries: prev.costEntries.filter((_, i) => i !== idx),
    }));
  };

  // Totals
  const totalIncome = formData.incomeEntries.reduce(
    (sum, entry) => sum + (parseFloat(entry.donationAmount) || 0),
    0
  );
  const totalCost = formData.costEntries.reduce(
    (sum, entry) => sum + (parseFloat(entry.costAmount) || 0),
    0
  );
  const balance = totalIncome - totalCost;

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = {
      ...formData,
      totalIncome,
      totalCost,
      balance,
    };

    console.log("Updated Data:", updatedData);

    if (onUpdate) {
      onUpdate(updatedData); // Send to parent / API
    }

    alert("Balance record updated successfully!");
  };

  if (!getBalance) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-semibold text-red-600">
          Balance not found!
        </h2>
        <Link
          to="/dashboard/giyarbi-sharif-balance"
          className="text-blue-500 underline"
        >
          Go Back
        </Link>
      </div>
    );
  }

  console.log("balance", balance);

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
          Update Giyarbi Sharif Balance
        </h2>

        <form onSubmit={handleSubmit} className="text-slate-700">
          {/* Header part */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
            <FloatingLabelInput
              name="giyarbiSharifDate"
              type="date"
              value={formData.giyarbiSharifDate}
              onChange={handleChange}
              disabled={true}
              placeholder="Giyarbi Sharif Date"
              icon={<MdOutlineDateRange />}
            />
            <FloatingLabelInput
              name="arabicMonth"
              type="text"
              value={formData.arabicMonth}
              onChange={handleChange}
              disabled={true}
              placeholder="Arabic Month"
              icon={<MdOutlineDateRange />}
            />
            <FloatingLabelInput
              name="balanceCollector"
              type="text"
              value={formData.balanceCollector}
              onChange={handleChange}
              disabled={true}
              placeholder="Balance Collector"
              icon={<AiOutlineUser />}
            />
          </section>

          {/* Income & Cost Sections */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
            {/* Income */}
            <div className="border border-green-600 px-3 py-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold text-center underline underline-offset-4 mb-3">
                Update Income
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

            {/* Cost */}
            <div className="border border-red-600 px-3 py-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold text-center underline underline-offset-4 mb-3">
                Update Cost
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
                      icon={<TbCurrencyTaka />}
                    />
                  </div>
                  <div className="w-[3%]">
                    <button
                      onClick={(e) => deleteCostEntry(e, idx)}
                      type="button"
                      className="text-[16px] bg-red-600 p-1 rounded-full text-white cursor-pointer"
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

          {/* Totals */}
          <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
            <div className="shadow-lg p-4 rounded-lg border border-slate-300">
              <h2 className="text-xl font-bold text-center underline underline-offset-4 mb-3">
                Total Income
              </h2>
              <div className="flex items-center gap-2">
                <FaDonate className="text-green-600 text-2xl" />
                <input
                  type="number"
                  value={totalIncome}
                  disabled
                  className="border-none bg-transparent"
                />
              </div>
            </div>
            <div className="shadow-lg p-4 rounded-lg border border-slate-300">
              <h2 className="text-xl font-bold text-center underline underline-offset-4 mb-3">
                Total Cost
              </h2>
              <div className="flex items-center gap-2">
                <FaDonate className="text-red-600 text-2xl" />
                <input
                  type="number"
                  value={totalCost}
                  disabled
                  className="border-none bg-transparent"
                />
              </div>
            </div>
            <div className="shadow-lg p-4 rounded-lg border border-slate-300">
              <h2 className="text-xl font-bold text-center underline underline-offset-4 mb-3">
                Balance
              </h2>
              <div className="flex items-center gap-2">
                <FaDonate className="text-indigo-600 text-2xl" />
                <input
                  type="number"
                  value={balance}
                  disabled
                  className="border-none bg-transparent"
                />
              </div>
            </div>
          </section>

          {/* Submit */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg shadow-md transition duration-300"
          >
            Update Balance
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
