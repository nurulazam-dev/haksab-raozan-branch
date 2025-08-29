import { motion } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const programs = [
  {
    id: 1,
    title: "Annual Islamic Conference",
    date: "January 15, 2025",
    location: "Satgasia Dorbar Sharif, Potiya, Chattogram",
    description:
      "A spiritual gathering focusing on Islamic teachings, unity, and community service.",
  },
  {
    id: 2,
    title: "Charity & Social Welfare Program",
    date: "March 10, 2025",
    location: "Dhaka, Bangladesh",
    description:
      "Organizing charity distribution for underprivileged families and orphans.",
  },
  {
    id: 3,
    title: "Annual Iftar Mahfil",
    date: "April 5, 2025",
    location: "Chattogram City",
    description:
      "A special gathering during Ramadan for prayers, unity, and community bonding.",
  },
  {
    id: 4,
    title: "Urs Sharif of Hazrat Abul Khair Sultanpury (RH.)",
    date: "October 20, 2025",
    location: "Satgasia Dorbar Sharif, Potiya, Chattogram",
    description:
      "Annual Urs Sharif of Hazrat Abul Khair Sultanpury (RH.), attended by thousands of followers.",
  },
];

export default function YearlyPrograms() {
  return (
    <div className="p-6 bg-gradient-to-b from-white to-gray-50 min-h-screen">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center text-gray-800 mb-10"
      >
        Yearly Programs & Events
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {programs.map((program, index) => (
          <motion.div
            key={program.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-6 border border-gray-100 transition transform hover:-translate-y-1"
          >
            <h3 className="text-xl font-semibold text-indigo-700 mb-3">
              {program.title}
            </h3>
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <FaCalendarAlt className="text-indigo-500" />
              <span>{program.date}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 mb-4">
              <FaMapMarkerAlt className="text-red-500" />
              <span>{program.location}</span>
            </div>
            <p className="text-gray-700">{program.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
