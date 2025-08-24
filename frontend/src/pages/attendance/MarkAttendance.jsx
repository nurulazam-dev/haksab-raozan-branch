import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { markAttendance, fetchEvents } from "../../services/attendanceService";
import Swal from "sweetalert2";

const MarkAttendance = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.event.events);
  const [selectedEvent, setSelectedEvent] = useState("");
  const [attendees, setAttendees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        await dispatch(fetchEvents());
        setLoading(false);
      } catch (error) {
        console.error("Failed to load events:", error);
        Swal.fire({
          title: "Error!",
          text: "Failed to load events",
          icon: "error",
          confirmButtonText: "OK",
        });
        setLoading(false);
      }
    };
    loadEvents();
  }, [dispatch]);

  const handleAttendance = async () => {
    try {
      await markAttendance(selectedEvent, attendees);
      Swal.fire({
        title: "Success!",
        text: "Attendance marked successfully",
        icon: "success",
        confirmButtonText: "OK",
      });
      setAttendees([]);
      setSelectedEvent("");
    } catch (error) {
      console.error("Failed to mark attendance:", error);
      Swal.fire({
        title: "Error!",
        text: "Attendance marking failed",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handleAttendeeChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setAttendees([...attendees, value]);
    } else {
      setAttendees(attendees.filter((attendee) => attendee !== value));
    }
  };

  if (loading) {
    return <div>Loading events...</div>;
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Mark Attendance</h1>
      <select
        value={selectedEvent}
        onChange={(e) => setSelectedEvent(e.target.value)}
        className="mb-4 p-2 border rounded"
      >
        <option value="">Select an event</option>
        {events.map((event) => (
          <option key={event._id} value={event._id}>
            {event.title}
          </option>
        ))}
      </select>
      {selectedEvent && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Attendees</h2>
          <div className="flex flex-col">
            {events
              .find((event) => event._id === selectedEvent)
              .attendees.map((attendee) => (
                <label key={attendee._id} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    value={attendee._id}
                    onChange={handleAttendeeChange}
                    className="mr-2"
                  />
                  {attendee.name}
                </label>
              ))}
          </div>
          <button
            onClick={handleAttendance}
            className="mt-4 p-2 bg-blue-500 text-white rounded"
          >
            Submit Attendance
          </button>
        </div>
      )}
    </div>
  );
};

export default MarkAttendance;
