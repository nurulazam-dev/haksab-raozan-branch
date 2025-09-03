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

  /* =========================start============================= */
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
    logic for qualification=start
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
    logic for qualification=end
  ================================*/
  /* =========end============ */

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

  return (
    <div className="flex justify-center items-center">
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
          <section className="border border-slate-300 w-full p-6 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-4">
            {/* Giyarbi Sharif Date */}
            <div>
              {/* ======start====== */}
              <FloatingLabelInput
                name="giyarbiSharifDate"
                type="date"
                value={formData?.giyarbiSharifDate}
                onChange={handleChange}
                required={true}
                placeholder="G S Date"
                icon={<MdOutlineDateRange />}
              />
              {/* ======end====== */}
            </div>

            {/* Arabic Month */}
            <div>
              {/* ======start====== */}
              <FloatingLabelInput
                name="arabicMonth"
                type="text"
                value={formData?.arabicMonth}
                placeholder="Arabic Month"
                onChange={handleChange}
                required={true}
                icon={<MdOutlineDateRange />}
              />
              {/* ======end====== */}
            </div>

            {/* Balance Collector */}
            <div>
              {/* ======start====== */}
              <FloatingLabelInput
                name="balanceCollector"
                type="text"
                value={formData?.balanceCollector}
                placeholder="TK Collector"
                onChange={handleChange}
                required={true}
                icon={<AiOutlineUser />}
              />
              {/* ======end====== */}
            </div>

            {/* Income Amount */}
            <div>
              <label className="text-gray-600 mb-1 font-medium flex items-center gap-2">
                <FaDonate /> Total Income
              </label>
              <input
                type="number"
                name="totalIncome"
                value={formData.totalIncome}
                onChange={handleChange}
                disabled
                className="w-full border border-slate-500 rounded p-2"
              />
            </div>

            {/* Total Cost Amount */}
            <div>
              <label className="text-gray-600 mb-1 font-medium flex items-center gap-2">
                <FaDonate /> Total Cost
              </label>
              <input
                type="number"
                name="totalCost"
                value={formData.totalCost}
                onChange={handleChange}
                disabled
                className="w-full border border-slate-500 rounded p-2"
              />
            </div>

            {/* Balance */}
            <div>
              <label className="text-gray-600 mb-1 font-medium flex items-center gap-2">
                <FaDonate /> Balance
              </label>
              <input
                type="number"
                name="balance"
                value={formData.balance}
                onChange={handleChange}
                disabled
                className="w-full border border-slate-500 rounded px-4 py-2"
              />
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            {/* ======add income part========= */}
            <div className="border border-green-600 px-3 py-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold text-center underline underline-offset-4 mb-3">
                Add Income
              </h2>
              {/* =========================================================================== */}
              <div>
                {formData.incomeEntries?.map((item, index) => (
                  <div key={index}>
                    <div>
                      {/* ===Starting & ending Date part=== */}
                      <div className="grid grid-cols-2 gap-5">
                        <div>
                          <p className="form_label">Donar Name*</p>
                          <input
                            type="text"
                            name="donarName"
                            value={item.donarName}
                            className="form_input"
                            onChange={(e) => handleIncomeEntryChange(e, index)}
                          />
                        </div>
                        <div>
                          <p className="form_label">Donation Amount*</p>
                          <input
                            type="number"
                            name="donationAmount"
                            value={item.donationAmount}
                            className="form_input"
                            onChange={(e) => handleIncomeEntryChange(e, index)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <button
                  onClick={addIncomeEntry}
                  className="bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer"
                >
                  Add Income
                </button>
              </div>
              {/* ======================================== */}
              {/* 1 donor field */}
              <div className="flex justify-center items-center mb-3 gap-3 w-full">
                {/* Donor Name */}
                <div className="md:w-[70%] w-[65%]">
                  {/* ======start====== */}
                  <FloatingLabelInput
                    name="donorName"
                    type="text"
                    value={formData?.donorName}
                    onChange={handleChange}
                    required={true}
                    placeholder="Donor Name"
                    icon={<AiOutlineUser />}
                  />
                  {/* ======end====== */}
                </div>
                {/* DonationAmount */}
                <div className="md:w-[30%] w-[35%]">
                  {/* ======start====== */}
                  <FloatingLabelInput
                    name="donationAmount"
                    type="number"
                    value={formData?.donationAmount}
                    placeholder="Amount"
                    onChange={handleChange}
                    required={true}
                    icon={<FaDonate />}
                  />
                  {/* ======end====== */}
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <button
                  onClick={addIncomeEntry}
                  className="flex items-center gap-2 border border-green-600 px-2 py-1 rounded-full cursor-pointer hover:bg-green-100 transition"
                >
                  <MdPersonAdd className="text-green-600 text-3xl mx-auto" />{" "}
                  Add More
                </button>
              </div>
            </div>
            {/* ======add cost part========= */}
            <div className="border border-red-600 px-3 py-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold text-center underline underline-offset-4 mb-3">
                Add Cost
              </h2>
              {/* 1 cost field */}
              <div className="flex justify-center items-center mb-3 gap-3 w-full">
                {/* Cost Name */}
                <div className="md:w-[70%] w-[65%]">
                  {/* ======start====== */}
                  <FloatingLabelInput
                    name="costName"
                    type="text"
                    value={formData?.costName}
                    onChange={handleChange}
                    required={true}
                    placeholder="Cost Name"
                    icon={<MdPersonAdd />}
                  />
                  {/* ======end====== */}
                </div>
                {/* Cost Amount */}
                <div className="md:w-[30%] w-[35%]">
                  {/* ======start====== */}
                  <FloatingLabelInput
                    name="costAmount"
                    type="number"
                    value={formData?.costAmount}
                    onChange={handleChange}
                    required={true}
                    placeholder="Amount"
                    icon={<FaDonate />}
                  />
                  {/* ======end====== */}
                </div>
              </div>
              <div className="flex justify-end pt-4">
                <div className="flex items-center gap-1 border border-red-600 px-2 py-1 rounded-full cursor-pointer hover:bg-red-100 transition">
                  <TbCurrencyTaka className="text-red-600 text-3xl mx-auto" />{" "}
                  Add More
                </div>
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
