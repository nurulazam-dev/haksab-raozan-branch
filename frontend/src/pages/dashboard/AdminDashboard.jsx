import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFinancialSummary } from "../../redux/financeSlice";
import ChartCard from "../../components/ChartCard";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const financialSummary = useSelector((state) => state.finance.summary);
  const loading = useSelector((state) => state.finance.loading);

  useEffect(() => {
    dispatch(fetchFinancialSummary());
  }, [dispatch]);

  return (
    <div className="flex flex-col h-screen">
      {/* <Navbar /> */}
      <div className="flex flex-grow">
        <Sidebar />
        <main className="flex-grow p-4">
          <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <ChartCard
                title="Today's Income"
                value={financialSummary.todayIncome}
              />
              <ChartCard
                title="Today's Expenses"
                value={financialSummary.todayExpenses}
              />
              <ChartCard
                title="Total Donations"
                value={financialSummary.totalDonations}
              />
              <ChartCard
                title="Monthly Collections"
                value={financialSummary.monthlyCollections}
              />
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
