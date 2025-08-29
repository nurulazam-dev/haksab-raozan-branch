import { motion } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";

const programs = [
  {
    year: "2021",
    title: "Annual Milad & Mahfil",
    description:
      "Organized yearly Milad and religious gathering with thousands of participants.",
  },
  {
    year: "2022",
    title: "Educational Scholarship Program",
    description:
      "Distributed scholarships among poor and meritorious students.",
  },
  {
    year: "2023",
    title: "Food Distribution",
    description:
      "Arranged free food distribution for needy families during Ramadan.",
  },
  {
    year: "2024",
    title: "Medical Camp",
    description: "Organized free medical checkup camp with specialist doctors.",
  },
];

export default function YearlyPrograms() {
  return (
    <div className="relative bg-gray-50 py-16 px-6 lg:px-20">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        Yearly Programs & Events
      </h2>

      <div className="relative max-w-5xl mx-auto">
        {/* Middle Progress Bar */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-300 transform -translate-x-1/2"></div>

        <div className="space-y-5">
          {programs.map((program, index) => (
            <motion.div
              key={program.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`relative flex items-center w-full ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              {/* Timeline Icon */}
              <div className="absolute left-1/2 transform -translate-x-1/2 bg-white border-4 border-blue-500 rounded-full w-12 h-12 flex items-center justify-center z-10">
                <FaCalendarAlt className="text-blue-500 text-xl" />
              </div>

              {/* Card */}
              <div
                className={`bg-white shadow-md rounded-2xl p-6 w-[480px] ${
                  index % 2 === 0 ? "mr-12" : "ml-12"
                }`}
              >
                <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                  {program.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{program.year}</p>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  {program.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
