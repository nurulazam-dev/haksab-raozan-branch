import { motion } from "framer-motion";
import { CalendarDays, MapPin, Users } from "lucide-react";

const programs = [
  {
    id: 1,
    title: "Annual Urs Sharif",
    date: "January 15, 2025",
    location: "Satgasia Dorbar Sharif, Patiya, Chattogram",
    attendees: "5000+ Devotees",
    description:
      "A spiritual gathering remembering Hazrat Abul Khair Sultanpury (RH.) with Quran recitation, waz, and doa mahfil.",
  },
  {
    id: 2,
    title: "Eid-e-Miladunnabi Celebration",
    date: "March 10, 2025",
    location: "Central Hall, Chattogram",
    attendees: "2000+ Attendees",
    description:
      "Celebrating the birth of our beloved Prophet Muhammad (SM) with milad, mahfil, and charity distribution.",
  },
  {
    id: 3,
    title: "Ramadan Iftar & Charity Program",
    date: "April 5, 2025",
    location: "Association Office & Local Mosques",
    attendees: "3000+ Families",
    description:
      "Distributing Iftar packs, financial aid, and charity support to needy families throughout Ramadan.",
  },
  {
    id: 4,
    title: "Educational Seminar",
    date: "August 20, 2025",
    location: "Chattogram University Auditorium",
    attendees: "1000+ Students",
    description:
      "A seminar on Islamic education, social harmony, and youth empowerment organized by the Association.",
  },
];

export default function YearlyPrograms() {
  return (
    <section className="py-12 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Our Yearly Programs & Events
        </motion.h2>

        {/* Program Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              className="p-6 bg-white shadow-lg rounded-2xl border border-gray-200 hover:shadow-xl transition"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {program.title}
              </h3>
              <p className="text-gray-600 mb-4">{program.description}</p>

              <div className="space-y-2 text-gray-700 text-sm">
                <p className="flex items-center gap-2">
                  <CalendarDays className="w-5 h-5 text-blue-600" />
                  {program.date}
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-green-600" />
                  {program.location}
                </p>
                <p className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-600" />
                  {program.attendees}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
