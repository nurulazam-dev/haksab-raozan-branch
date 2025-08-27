import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "../../redux/eventSlice";
import { Link } from "react-router-dom";

const EventList = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state?.events?.events);
  const loading = useSelector((state) => state?.events?.loading);
  const error = useSelector((state) => state?.events?.error);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-4 py-12">
      <h1 className="text-2xl font-bold mb-4">Event List</h1>
      <Link
        to="/events/add"
        className="mb-4 inline-block bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add New Event
      </Link>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr>
            <th className="border px-4 py-2">Title</th>
            <th className="border px-4 py-2">Date</th>
            <th className="border px-4 py-2">Time</th>
            <th className="border px-4 py-2">Location</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {events?.map((event) => (
            <tr key={event?._id}>
              <td className="border px-4 py-2">{event?.title}</td>
              <td className="border px-4 py-2">
                {new Date(event?.date).toLocaleDateString()}
              </td>
              <td className="border px-4 py-2">{event?.time}</td>
              <td className="border px-4 py-2">{event?.location}</td>
              <td className="border px-4 py-2">
                <Link
                  to={`/events/edit/${event?._id}`}
                  className="text-blue-500"
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventList;
