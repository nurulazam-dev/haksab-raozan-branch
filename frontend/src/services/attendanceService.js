import axios from "axios";

const API_URL = "http://localhost:5000/api/attendance/";

const attendanceService = {
  getAttendanceRecords: async () => {
    const response = await axios.get(API_URL);
    return response.data;
  },

  markAttendance: async (eventId, memberId, status) => {
    const response = await axios.post(`${API_URL}mark`, {
      eventId,
      memberId,
      status,
    });
    return response.data;
  },

  getAttendanceByEvent: async (eventId) => {
    const response = await axios.get(`${API_URL}event/${eventId}`);
    return response.data;
  },

  deleteAttendanceRecord: async (attendanceId) => {
    const response = await axios.delete(`${API_URL}${attendanceId}`);
    return response.data;
  },

  updateAttendanceRecord: async (attendanceId, updatedData) => {
    const response = await axios.put(`${API_URL}${attendanceId}`, updatedData);
    return response.data;
  },

  getEvents: async () => {
    const response = await axios.get("http://localhost:5000/api/events/");
    return response.data;
  },
};

export default attendanceService;
