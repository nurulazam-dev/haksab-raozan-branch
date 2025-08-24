import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchIncome } from "../../redux/financeSlice";
import { Link } from "react-router-dom";
import ChartCard from "../../components/ChartCard";

const IncomeList = () => {
  const dispatch = useDispatch();
  const incomeRecords = useSelector((state) => state.finance.incomeRecords);
  const loading = useSelector((state) => state.finance.loading);
  const error = useSelector((state) => state.finance.error);

  useEffect(() => {
    dispatch(fetchIncome());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Income Records</h1>
      <Link
        to="/finance/add-income"
        className="mb-4 inline-block bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add New Income
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {incomeRecords.map((record) => (
          <ChartCard
            key={record._id}
            title={record.title}
            amount={record.amount}
            date={record.date}
          />
        ))}
      </div>
    </div>
  );
};

export default IncomeList;
