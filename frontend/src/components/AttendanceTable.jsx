import React from "react";

const AttendanceTable = ({ records }) => {
  if (!records || records.length === 0) {
    return <div className="text-gray-500">No attendance records found.</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded shadow">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="py-2 px-4">#</th>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Date</th>
            <th className="py-2 px-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, idx) => (
            <tr key={record.id || idx} className="border-b">
              <td className="py-2 px-4">{idx + 1}</td>
              <td className="py-2 px-4">{record.name}</td>
              <td className="py-2 px-4">{record.date}</td>
              <td className="py-2 px-4">
                <span
                  className={
                    record.status === "Present"
                      ? "text-green-600 font-semibold"
                      : "text-red-600 font-semibold"
                  }
                >
                  {record.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceTable;
