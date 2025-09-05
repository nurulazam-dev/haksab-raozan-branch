import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import AuthLayout from "../layouts/AuthLayout";
import AdminDashboard from "../pages/dashboard/AdminDashboard";
import AccountantDashboard from "../pages/dashboard/AccountantDashboard";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import IncomeList from "../pages/finance/IncomeList";
import AddIncome from "../pages/finance/AddIncome";
import ExpenseList from "../pages/finance/ExpenseList";
import AddExpense from "../pages/finance/AddExpense";
import AttendanceList from "../pages/attendance/AttendanceList";
import MarkAttendance from "../pages/attendance/MarkAttendance";
import EventList from "../pages/events/EventList";
import AddEvent from "../pages/events/AddEvent";
import MemberList from "../pages/members/MemberList";
import MemberProfile from "../pages/members/MemberProfile";
import NoticeList from "../pages/notices/NoticeList";
import AddNotice from "../pages/notices/AddNotice";
import ReportsPage from "../pages/reports/ReportsPage";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import MainDashboard from "../pages/dashboard/MainDashboard";
import Overview from "../pages/dashboard/Overview";
import Settings from "../pages/dashboard/Settings";
import GiyarbiSharifBalance from "../components/Dashboard/Accounts/Giyarbi-Sharif/GiyarbiSharifBalance";
import AddGiyarbiSharifBalance from "../components/Dashboard/Accounts/Giyarbi-Sharif/AddGiyarbiSharifBalance";
import UpdateGiyarbiSharifBalance from "../components/Dashboard/Accounts/Giyarbi-Sharif/UpdateGiyarbiSharifBalance";
import GiyarbiSharifBalanceDetails from "../components/Dashboard/Accounts/Giyarbi-Sharif/GiyarbiSharifBalanceDetails";

const TestRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/dashboard" element={<MainDashboard />}>
        <Route index element={<Overview />} />
        <Route path="admin" element={<AdminDashboard />} />
        <Route path="accountant" element={<AccountantDashboard />} />
        <Route
          path="giyarbi-sharif-balance"
          element={<GiyarbiSharifBalance />}
        />
        <Route
          path="add-giyarbi-sharif-balance"
          element={<AddGiyarbiSharifBalance />}
        />
        <Route
          path="giyarbi-sharif-balance/details/:id"
          element={<GiyarbiSharifBalanceDetails />}
        />
        <Route
          path="giyarbi-sharif-balance/update/:id"
          element={<UpdateGiyarbiSharifBalance />}
        />
        <Route path="finance/income" element={<IncomeList />} />
        <Route path="finance/add-income" element={<AddIncome />} />
        <Route path="finance/expenses" element={<ExpenseList />} />
        <Route path="finance/add-expense" element={<AddExpense />} />
        <Route path="attendance" element={<AttendanceList />} />
        <Route path="attendance/mark" element={<MarkAttendance />} />
        <Route path="events" element={<EventList />} />
        <Route path="events/add" element={<AddEvent />} />
        <Route path="members" element={<MemberList />} />
        <Route path="members/:id" element={<MemberProfile />} />
        <Route path="notices" element={<NoticeList />} />
        <Route path="notices/add" element={<AddNotice />} />
        <Route path="reports" element={<ReportsPage />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      {/* <Route path="*" element={<Navigate to="/login" replace />} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default TestRoutes;
