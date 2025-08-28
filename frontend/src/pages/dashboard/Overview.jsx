import { motion } from "framer-motion";
import {
  FaUsers,
  FaCalendarAlt,
  FaBullhorn,
  FaRegClipboard,
} from "react-icons/fa";

const Overview = () => {
  const stats = [
    {
      id: 1,
      title: "Total Members",
      value: "1,245",
      icon: <FaUsers className="text-blue-600 text-3xl" />,
    },
    {
      id: 2,
      title: "Upcoming Events",
      value: "8",
      icon: <FaCalendarAlt className="text-green-600 text-3xl" />,
    },
    {
      id: 3,
      title: "Notices",
      value: "15",
      icon: <FaBullhorn className="text-yellow-500 text-3xl" />,
    },
    {
      id: 4,
      title: "Active Projects",
      value: "5",
      icon: <FaRegClipboard className="text-purple-600 text-3xl" />,
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <motion.div
            key={stat.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white shadow-lg rounded-2xl p-6 flex items-center justify-between border border-gray-100"
          >
            <div>
              <p className="text-gray-500 text-sm">{stat.title}</p>
              <h3 className="text-2xl font-semibold">{stat.value}</h3>
            </div>
            <div className="p-3 bg-gray-100 rounded-full">{stat.icon}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Overview;
