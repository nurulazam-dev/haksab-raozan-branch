import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExpenses } from "../../redux/financeSlice";
import { formatDate } from "../../utils/formatDate";

const ExpenseList = () => {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.finance.expenses);
  const loading = useSelector((state) => state.finance.loading);
  const error = useSelector((state) => state.finance.error);

  useEffect(() => {
    dispatch(fetchExpenses());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Expense List</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Amount</th>
            <th className="py-2 px-4 border-b">Purpose</th>
            <th className="py-2 px-4 border-b">Notes</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense?._id}>
              <td className="py-2 px-4 border-b">
                {formatDate(expense?.date)}
              </td>
              <td className="py-2 px-4 border-b">{expense?.amount}</td>
              <td className="py-2 px-4 border-b">{expense?.purpose}</td>
              <td className="py-2 px-4 border-b">{expense?.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;
