import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchIncome, fetchExpenses } from '../../redux/financeSlice';
import ChartCard from '../../components/ChartCard';
import { formatCurrency } from '../../utils/formatCurrency';

const AccountantDashboard = () => {
    const dispatch = useDispatch();
    const income = useSelector((state) => state.finance.income);
    const expenses = useSelector((state) => state.finance.expenses);
    const [totalIncome, setTotalIncome] = useState(0);
    const [totalExpenses, setTotalExpenses] = useState(0);

    useEffect(() => {
        dispatch(fetchIncome());
        dispatch(fetchExpenses());
    }, [dispatch]);

    useEffect(() => {
        const incomeTotal = income.reduce((acc, curr) => acc + curr.amount, 0);
        const expensesTotal = expenses.reduce((acc, curr) => acc + curr.amount, 0);
        setTotalIncome(incomeTotal);
        setTotalExpenses(expensesTotal);
    }, [income, expenses]);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Accountant Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ChartCard title="Total Income" value={formatCurrency(totalIncome)} />
                <ChartCard title="Total Expenses" value={formatCurrency(totalExpenses)} />
            </div>
            <div className="mt-6">
                <h2 className="text-xl font-semibold">Income Records</h2>
                {/* Income records table or list can be added here */}
            </div>
            <div className="mt-6">
                <h2 className="text-xl font-semibold">Expense Records</h2>
                {/* Expense records table or list can be added here */}
            </div>
        </div>
    );
};

export default AccountantDashboard;