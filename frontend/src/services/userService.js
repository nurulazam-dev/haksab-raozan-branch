import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users/';

// Fetch all members
export const fetchMembers = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

// Fetch a single member by ID
export const fetchMemberById = async (id) => {
    const response = await axios.get(`${API_URL}${id}`);
    return response.data;
};

// Add a new member
export const addMember = async (memberData) => {
    const response = await axios.post(API_URL, memberData);
    return response.data;
};

// Update an existing member
export const updateMember = async (id, memberData) => {
    const response = await axios.put(`${API_URL}${id}`, memberData);
    return response.data;
};

// Deactivate a member
export const deactivateMember = async (id) => {
    const response = await axios.delete(`${API_URL}${id}`);
    return response.data;
};