import axios from 'axios';

const API_URL = 'http://localhost:5000/api/events'; // Update with your backend API URL

// Create a new event
const createEvent = async (eventData) => {
    const response = await axios.post(API_URL, eventData);
    return response.data;
};

// Get all events
const getEvents = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

// Get a single event by ID
const getEventById = async (eventId) => {
    const response = await axios.get(`${API_URL}/${eventId}`);
    return response.data;
};

// Update an event
const updateEvent = async (eventId, eventData) => {
    const response = await axios.put(`${API_URL}/${eventId}`, eventData);
    return response.data;
};

// Delete an event
const deleteEvent = async (eventId) => {
    const response = await axios.delete(`${API_URL}/${eventId}`);
    return response.data;
};

export { createEvent, getEvents, getEventById, updateEvent, deleteEvent };