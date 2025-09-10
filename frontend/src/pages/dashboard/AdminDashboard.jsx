import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFinancialSummary } from "../../redux/financeSlice";
import ChartCard from "../../components/ChartCard";
import Sidebar from "../../components/Sidebar";
import TopBanner from "../../components/Shared/TopBanner";

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const financialSummary = useSelector((state) => state.finance.summary);
  const loading = useSelector((state) => state.finance.loading);

  useEffect(() => {
    dispatch(fetchFinancialSummary());
  }, [dispatch]);

  return (
    <main className="px-2">
      {loading ? (
        <p className="text-center text-red-600">Loading...</p>
      ) : (
        <div>
          {/* top section */}
          <TopBanner />

          {/* Title */}
          <h2 className="text-2xl font-bold mb-4 text-center bg-green-600 text-white py-1 rounded-t-lg">
            Admin Dashboard
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ChartCard
              title="Today's Income"
              value={financialSummary?.todayIncome}
            />
            <ChartCard
              title="Today's Expenses"
              value={financialSummary?.todayExpenses}
            />
            <ChartCard
              title="Total Donations"
              value={financialSummary?.totalDonations}
            />
            <ChartCard
              title="Monthly Collections"
              value={financialSummary?.monthlyCollections}
            />
          </div>
        </div>
      )}
    </main>
  );
};

export default AdminDashboard;
