import { FaCalendarAlt, FaCheckCircle } from "react-icons/fa";

const YearlyPrograms = () => {
  const programs = [
    {
      id: 1,
      title: "Annual Ijtema",
      date: "January 15, 2025",
      status: "completed",
    },
    {
      id: 2,
      title: "Ramadan Food Distribution",
      date: "March 10, 2025",
      status: "completed",
    },
    {
      id: 3,
      title: "Eid Reunion Program",
      date: "April 20, 2025",
      status: "ongoing",
    },
    {
      id: 4,
      title: "Youth Conference",
      date: "July 5, 2025",
      status: "upcoming",
    },
    {
      id: 5,
      title: "Year-End Cultural Event",
      date: "December 25, 2025",
      status: "upcoming",
    },
  ];

  const getStatusColor = (status) => {
    if (status === "completed") return "bg-green-500";
    if (status === "ongoing") return "bg-blue-500 animate-pulse";
    return "bg-gray-400";
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
        📅 Our Yearly Programs & Events
      </h2>

      <div className="relative">
        {/* Vertical Progress Line */}
        <div className="absolute left-6 top-0 w-1 h-full bg-gray-200"></div>

        <div className="space-y-8">
          {programs.map((program) => (
            <div key={program.id} className="relative flex items-center">
              {/* Icon Circle */}
              <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white border-4 border-gray-200">
                {program.status === "completed" ? (
                  <FaCheckCircle className="text-green-500 text-xl" />
                ) : (
                  <FaCalendarAlt className="text-blue-500 text-xl" />
                )}
              </div>

              {/* Program Info */}
              <div className="ml-6 flex-1 p-4 rounded-lg shadow-md bg-white hover:shadow-lg transition">
                <h3 className="text-lg font-semibold text-gray-800">
                  {program.title}
                </h3>
                <p className="text-sm text-gray-500">{program.date}</p>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${getStatusColor(
                      program.status
                    )}`}
                    style={{
                      width:
                        program.status === "completed"
                          ? "100%"
                          : program.status === "ongoing"
                          ? "60%"
                          : "20%",
                    }}
                  ></div>
                </div>
                <p className="text-xs mt-1 text-gray-600">
                  Status:{" "}
                  <span className="capitalize font-medium">
                    {program.status}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YearlyPrograms;
