import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReports } from "../../redux/financeSlice";
import ChartCard from "../../components/ChartCard";
import { formatDate } from "../../utils/formatDate";

const ReportsPage = () => {
  const dispatch = useDispatch();
  const reports = useSelector((state) => state.finance.reports);
  const loading = useSelector((state) => state.finance.loading);
  const error = useSelector((state) => state.finance.error);

  useEffect(() => {
    dispatch(fetchReports());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Reports & Analytics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reports?.map((report) => (
          <ChartCard
            key={report?.id}
            title={report?.title}
            value={report?.value}
            date={formatDate(report?.date)}
          />
        ))}
      </div>
    </div>
  );
};

export default ReportsPage;
