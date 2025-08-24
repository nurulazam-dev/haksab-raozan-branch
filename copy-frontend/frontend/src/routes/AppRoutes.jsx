import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import AuthLayout from '../layouts/AuthLayout';
import AdminDashboard from '../pages/dashboard/AdminDashboard';
import AccountantDashboard from '../pages/dashboard/AccountantDashboard';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import IncomeList from '../pages/finance/IncomeList';
import AddIncome from '../pages/finance/AddIncome';
import ExpenseList from '../pages/finance/ExpenseList';
import AddExpense from '../pages/finance/AddExpense';
import AttendanceList from '../pages/attendance/AttendanceList';
import MarkAttendance from '../pages/attendance/MarkAttendance';
import EventList from '../pages/events/EventList';
import AddEvent from '../pages/events/AddEvent';
import MemberList from '../pages/members/MemberList';
import MemberProfile from '../pages/members/MemberProfile';
import NoticeList from '../pages/notices/NoticeList';
import AddNotice from '../pages/notices/AddNotice';
import ReportsPage from '../pages/reports/ReportsPage';
import { useSelector } from 'react-redux';

const AppRoutes = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const userRole = useSelector((state) => state.auth.user?.role);

    return (
        <Router>
            <Switch>
                <Route path="/login" exact>
                    <AuthLayout>
                        <Login />
                    </AuthLayout>
                </Route>
                <Route path="/register" exact>
                    <AuthLayout>
                        <Register />
                    </AuthLayout>
                </Route>
                <Route path="/dashboard/admin" exact>
                    {isAuthenticated && userRole === 'Admin' ? (
                        <DashboardLayout>
                            <AdminDashboard />
                        </DashboardLayout>
                    ) : (
                        <Redirect to="/login" />
                    )}
                </Route>
                <Route path="/dashboard/accountant" exact>
                    {isAuthenticated && userRole === 'Accountant' ? (
                        <DashboardLayout>
                            <AccountantDashboard />
                        </DashboardLayout>
                    ) : (
                        <Redirect to="/login" />
                    )}
                </Route>
                <Route path="/finance/income" exact>
                    {isAuthenticated ? (
                        <DashboardLayout>
                            <IncomeList />
                        </DashboardLayout>
                    ) : (
                        <Redirect to="/login" />
                    )}
                </Route>
                <Route path="/finance/add-income" exact>
                    {isAuthenticated ? (
                        <DashboardLayout>
                            <AddIncome />
                        </DashboardLayout>
                    ) : (
                        <Redirect to="/login" />
                    )}
                </Route>
                <Route path="/finance/expenses" exact>
                    {isAuthenticated ? (
                        <DashboardLayout>
                            <ExpenseList />
                        </DashboardLayout>
                    ) : (
                        <Redirect to="/login" />
                    )}
                </Route>
                <Route path="/finance/add-expense" exact>
                    {isAuthenticated ? (
                        <DashboardLayout>
                            <AddExpense />
                        </DashboardLayout>
                    ) : (
                        <Redirect to="/login" />
                    )}
                </Route>
                <Route path="/attendance" exact>
                    {isAuthenticated ? (
                        <DashboardLayout>
                            <AttendanceList />
                        </DashboardLayout>
                    ) : (
                        <Redirect to="/login" />
                    )}
                </Route>
                <Route path="/attendance/mark" exact>
                    {isAuthenticated ? (
                        <DashboardLayout>
                            <MarkAttendance />
                        </DashboardLayout>
                    ) : (
                        <Redirect to="/login" />
                    )}
                </Route>
                <Route path="/events" exact>
                    {isAuthenticated ? (
                        <DashboardLayout>
                            <EventList />
                        </DashboardLayout>
                    ) : (
                        <Redirect to="/login" />
                    )}
                </Route>
                <Route path="/events/add" exact>
                    {isAuthenticated ? (
                        <DashboardLayout>
                            <AddEvent />
                        </DashboardLayout>
                    ) : (
                        <Redirect to="/login" />
                    )}
                </Route>
                <Route path="/members" exact>
                    {isAuthenticated ? (
                        <DashboardLayout>
                            <MemberList />
                        </DashboardLayout>
                    ) : (
                        <Redirect to="/login" />
                    )}
                </Route>
                <Route path="/members/:id" exact>
                    {isAuthenticated ? (
                        <DashboardLayout>
                            <MemberProfile />
                        </DashboardLayout>
                    ) : (
                        <Redirect to="/login" />
                    )}
                </Route>
                <Route path="/notices" exact>
                    {isAuthenticated ? (
                        <DashboardLayout>
                            <NoticeList />
                        </DashboardLayout>
                    ) : (
                        <Redirect to="/login" />
                    )}
                </Route>
                <Route path="/notices/add" exact>
                    {isAuthenticated ? (
                        <DashboardLayout>
                            <AddNotice />
                        </DashboardLayout>
                    ) : (
                        <Redirect to="/login" />
                    )}
                </Route>
                <Route path="/reports" exact>
                    {isAuthenticated ? (
                        <DashboardLayout>
                            <ReportsPage />
                        </DashboardLayout>
                    ) : (
                        <Redirect to="/login" />
                    )}
                </Route>
                <Redirect from="/" to="/login" />
            </Switch>
        </Router>
    );
};

export default AppRoutes;