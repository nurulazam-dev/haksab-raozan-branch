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
import { useSelector } from "react-redux";
import Home from "../pages/Home";

const AppRoutes = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userRole = useSelector((state) => state.auth.user?.role);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <AuthLayout>
            <Home />
          </AuthLayout>
        }
      />
      <Route
        path="/home"
        element={
          <AuthLayout>
            <Home />
          </AuthLayout>
        }
      />
      <Route
        path="/login"
        element={
          <AuthLayout>
            <Login />
          </AuthLayout>
        }
      />
      <Route
        path="/register"
        element={
          <AuthLayout>
            <Register />
          </AuthLayout>
        }
      />
      <Route
        path="/dashboard/admin"
        element={
          isAuthenticated && userRole === "Admin" ? (
            <DashboardLayout>
              <AdminDashboard />
            </DashboardLayout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/dashboard/accountant"
        element={
          isAuthenticated && userRole === "Accountant" ? (
            <DashboardLayout>
              <AccountantDashboard />
            </DashboardLayout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/finance/income"
        element={
          isAuthenticated ? (
            <DashboardLayout>
              <IncomeList />
            </DashboardLayout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/finance/add-income"
        element={
          isAuthenticated ? (
            <DashboardLayout>
              <AddIncome />
            </DashboardLayout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/finance/expenses"
        element={
          isAuthenticated ? (
            <DashboardLayout>
              <ExpenseList />
            </DashboardLayout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/finance/add-expense"
        element={
          isAuthenticated ? (
            <DashboardLayout>
              <AddExpense />
            </DashboardLayout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/attendance"
        element={
          isAuthenticated ? (
            <DashboardLayout>
              <AttendanceList />
            </DashboardLayout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/attendance/mark"
        element={
          isAuthenticated ? (
            <DashboardLayout>
              <MarkAttendance />
            </DashboardLayout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/events"
        element={
          isAuthenticated ? (
            <DashboardLayout>
              <EventList />
            </DashboardLayout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/events/add"
        element={
          isAuthenticated ? (
            <DashboardLayout>
              <AddEvent />
            </DashboardLayout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/members"
        element={
          isAuthenticated ? (
            <DashboardLayout>
              <MemberList />
            </DashboardLayout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/members/:id"
        element={
          isAuthenticated ? (
            <DashboardLayout>
              <MemberProfile />
            </DashboardLayout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/notices"
        element={
          isAuthenticated ? (
            <DashboardLayout>
              <NoticeList />
            </DashboardLayout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/notices/add"
        element={
          isAuthenticated ? (
            <DashboardLayout>
              <AddNotice />
            </DashboardLayout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/reports"
        element={
          isAuthenticated ? (
            <DashboardLayout>
              <ReportsPage />
            </DashboardLayout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AppRoutes;
