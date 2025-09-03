import { useState } from "react";
import { motion } from "framer-motion";
import { FaDonate } from "react-icons/fa";
import { TbCurrencyTaka } from "react-icons/tb";
import { MdOutlineDateRange, MdPersonAdd } from "react-icons/md";
import { AiOutlineDelete, AiOutlineUser } from "react-icons/ai";
import FloatingLabelInput from "../../../Shared/FloatingLabelInput";

export default function AddGiyarbiSharifBalance() {
  const [formData, setFormData] = useState({
    giyarbiSharifDate: "",
    arabicMonth: "",
    balanceCollector: "",
    totalIncome: "",
    totalCost: "",
    balance: "",
    incomeEntries: [],
    costEntries: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  //reusable function for adding item
  const addItem = (key, item) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: [...prevFormData[key], item],
    }));
  };

  //reusable input change function
  const handleReusableInputChangeFunc = (key, index, event) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => {
      const updateItems = [...prevFormData[key]];

      updateItems[index][name] = value;

      return {
        ...prevFormData,
        [key]: updateItems,
      };
    });
  };

  /*================================
    logic for income=start
  ================================*/
  const addIncomeEntry = (e) => {
    e.preventDefault();

    addItem("incomeEntries", {
      donarName: "",
      donationAmount: "",
    });
  };

  const handleIncomeEntryChange = (event, index) => {
    handleReusableInputChangeFunc("incomeEntries", index, event);
  };

  /*================================
    logic for cost=start
  ================================*/
  const addCostEntry = (e) => {
    e.preventDefault();

    addItem("costEntries", {
      costName: "",
      costAmount: "",
    });
  };

  const handleCostEntryChange = (event, index) => {
    handleReusableInputChangeFunc("costEntries", index, event);
  };
  /*================================
    logic for income=end
  ================================*/

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("Balance record added successfully!");
    setFormData({
      giyarbiSharifDate: "",
      arabicMonth: "",
      balanceCollector: "",
      totalIncome: "",
      totalCost: "",
      balance: "",
      incomeEntries: [],
      costEntries: [],
    });
  };

  // logic for total income
  const calculateTotalIncome = () => {
    return formData.incomeEntries.reduce((total, entry) => {
      const amount = parseFloat(entry.donationAmount) || 0;
      return total + amount;
    }, 0);
  };

  // logic for total cost
  const calculateTotalCost = () => {
    return formData.costEntries.reduce((total, entry) => {
      const amount = parseFloat(entry.donationAmount) || 0;
      return total + amount;
    }, 0);
  };

  // logic for balance
  const calculateBalance = () => {
    return calculateTotalIncome() - calculateTotalCost();
  };

  return (
    <div className="">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-center text-indigo-600 flex items-center justify-center gap-2 mb-4">
          <FaDonate className="text-indigo-500" />
          Add Giyarbi Sharif Balance
        </h2>

        <form onSubmit={handleSubmit} className="text-slate-700">
          {/* =================
              Header part
          ================= */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
            {/* Giyarbi Sharif Date */}
            <div>
              <FloatingLabelInput
                name="giyarbiSharifDate"
                type="date"
                value={formData?.giyarbiSharifDate}
                onChange={handleChange}
                required={true}
                placeholder="Giyarbi Sharif Date"
                icon={<MdOutlineDateRange />}
              />
            </div>

            {/* Arabic Month */}
            <div>
              <FloatingLabelInput
                name="arabicMonth"
                type="text"
                value={formData?.arabicMonth}
                placeholder="Arabic Month"
                onChange={handleChange}
                required={true}
                icon={<MdOutlineDateRange />}
              />
            </div>

            {/* Balance Collector */}
            <div>
              <FloatingLabelInput
                name="balanceCollector"
                type="text"
                value={formData?.balanceCollector}
                placeholder="Balance Collector"
                onChange={handleChange}
                required={true}
                icon={<AiOutlineUser />}
              />
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
            {/* ========================================
                        Add income start
              ========================================= */}
            <div className="border border-green-600 px-3 py-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold text-center underline underline-offset-4 mb-3">
                Add Income
              </h2>
              {/* ===1 donar field test start=== */}
              {formData?.incomeEntries?.map((item, index) => (
                <div className="flex justify-center items-center mb-3 gap-3 w-full">
                  {/* Donar Name */}
                  <div className="md:w-[70%] w-[65%]">
                    <FloatingLabelInput
                      name="donarName"
                      type="text"
                      value={item.donarName}
                      onChange={(e) => handleIncomeEntryChange(e, index)}
                      required={true}
                      placeholder="Donar Name"
                      icon={<AiOutlineUser />}
                    />
                  </div>
                  {/* DonationAmount */}
                  <div className="md:w-[30%] w-[35%]">
                    <FloatingLabelInput
                      name="donationAmount"
                      type="number"
                      value={item?.donationAmount}
                      placeholder="Amount"
                      onChange={(e) => handleIncomeEntryChange(e, index)}
                      required={true}
                      icon={<FaDonate />}
                    />
                  </div>
                </div>
              ))}
              {/* ===1 donar field test end=== */}
              <div className="flex justify-end pt-4">
                <button
                  onClick={addIncomeEntry}
                  className="flex items-center gap-2 border border-green-600 px-2 py-1 rounded-full cursor-pointer hover:bg-green-100 transition"
                >
                  <MdPersonAdd className="text-green-600 text-3xl mx-auto" />{" "}
                  Add One
                </button>
              </div>
            </div>

            {/* ========================================
                        Add Cost start
              ========================================= */}
            <div className="border border-red-600 px-3 py-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold text-center underline underline-offset-4 mb-3">
                Add Cost
              </h2>
              {/* ===1 cost field=== */}
              {formData?.costEntries?.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center mb-3 gap-3 w-full"
                >
                  {/* Cost Name */}
                  <div className="md:w-[70%] w-[65%]">
                    <FloatingLabelInput
                      name="costName"
                      type="text"
                      value={item?.costName}
                      onChange={(e) => handleCostEntryChange(e, index)}
                      required={true}
                      placeholder="Cost Name"
                      icon={<MdPersonAdd />}
                    />
                  </div>
                  {/* Cost Amount */}
                  <div className="md:w-[30%] w-[35%]">
                    <FloatingLabelInput
                      name="costAmount"
                      type="number"
                      value={item?.costAmount}
                      onChange={(e) => handleCostEntryChange(e, index)}
                      required={true}
                      placeholder="Amount"
                      icon={<FaDonate />}
                    />
                  </div>
                </div>
              ))}
              <div className="flex justify-end pt-4">
                <button
                  onClick={addCostEntry}
                  className="flex items-center gap-1 border border-red-600 px-2 py-1 rounded-full cursor-pointer hover:bg-red-100 transition"
                >
                  <TbCurrencyTaka className="text-red-600 text-3xl mx-auto" />{" "}
                  Add One
                </button>
              </div>
            </div>
          </section>

          {/* ========================================
                        statistics section
          ========================================= */}
          <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
            {/* ===Total Income Amount=== */}
            <div className="shadow-lg p-4 rounded-lg border border-slate-300">
              <h2 className="text-xl font-bold text-center underline underline-offset-4 mb-3">
                Total Income
              </h2>
              <div className="flex items-center gap-2">
                <div className="">
                  <FaDonate className="text-green-600 text-2xl" />
                </div>
                <div>
                  <input
                    type="number"
                    name="totalIncome"
                    value={calculateTotalIncome()}
                    disabled
                    className="border-none"
                  />
                </div>
              </div>
            </div>

            {/* ===Total Cost Amount=== */}
            <div className="shadow-lg p-4 rounded-lg border border-slate-300">
              <h2 className="text-xl font-bold text-center underline underline-offset-4 mb-3">
                Total Cost
              </h2>
              <div className="flex items-center gap-2">
                <div className="">
                  <FaDonate className="text-green-600 text-2xl" />
                </div>
                <div>
                  <input
                    type="number"
                    name="totalCost"
                    value={calculateTotalCost()}
                    disabled
                    className="border-none"
                  />
                </div>
              </div>
            </div>

            {/* ===Balance=== */}
            <div className="shadow-lg p-4 rounded-lg border border-slate-300">
              <h2 className="text-xl font-bold text-center underline underline-offset-4 mb-3">
                Balance
              </h2>
              <div className="flex items-center gap-2">
                <div className="">
                  <FaDonate className="text-green-600 text-2xl" />
                </div>
                <div>
                  <input
                    type="number"
                    name="balance"
                    value={calculateBalance()}
                    disabled
                    className="border-none"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* ================
              Submit Button
          ================ */}
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
