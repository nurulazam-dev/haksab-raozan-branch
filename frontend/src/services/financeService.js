import axios from 'axios';

const API_URL = 'http://localhost:5000/api/finance/';

// Get all income records
export const getIncomeRecords = async () => {
    const response = await axios.get(`${API_URL}income`);
    return response.data;
};

// Add a new income record
export const addIncomeRecord = async (incomeData) => {
    const response = await axios.post(`${API_URL}income`, incomeData);
    return response.data;
};

// Update an existing income record
export const updateIncomeRecord = async (id, incomeData) => {
    const response = await axios.put(`${API_URL}income/${id}`, incomeData);
    return response.data;
};

// Delete an income record
export const deleteIncomeRecord = async (id) => {
    const response = await axios.delete(`${API_URL}income/${id}`);
    return response.data;
};

// Get all expense records
export const getExpenseRecords = async () => {
    const response = await axios.get(`${API_URL}expenses`);
    return response.data;
};

// Add a new expense record
export const addExpenseRecord = async (expenseData) => {
    const response = await axios.post(`${API_URL}expenses`, expenseData);
    return response.data;
};

// Update an existing expense record
export const updateExpenseRecord = async (id, expenseData) => {
    const response = await axios.put(`${API_URL}expenses/${id}`, expenseData);
    return response.data;
};

// Delete an expense record
export const deleteExpenseRecord = async (id) => {
    const response = await axios.delete(`${API_URL}expenses/${id}`);
    return response.data;
};

// Generate financial reports
export const generateFinancialReport = async (reportData) => {
    const response = await axios.post(`${API_URL}reports`, reportData);
    return response.data;
};