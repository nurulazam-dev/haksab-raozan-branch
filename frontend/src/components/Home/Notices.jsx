// import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Megaphone } from "lucide-react";

const notices = [
  {
    id: 1,
    title: "Monthly Membership Fee Reminder",
    date: "2025-08-25",
    description:
      "Members are kindly requested to clear their monthly membership fees by the 30th of this month.",
  },
  {
    id: 2,
    title: "Special Mahfil Announcement",
    date: "2025-09-05",
    description:
      "A special Mahfil will be held on September 15th at Raozan Central Jame Masjid. All members are requested to attend.",
  },
  {
    id: 3,
    title: "General Meeting Schedule",
    date: "2025-09-10",
    description:
      "The monthly general meeting is scheduled for September 12th at the community hall. Important discussions will take place.",
  },
];

const Notices = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Latest <span className="text-green-700">Notices</span>
        </h2>
        <p className="mt-3 text-gray-600">
          Stay informed with our recent announcements and important updates.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {notices.map((notice, index) => (
          <motion.div
            key={notice.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-gray-50 shadow-md rounded-2xl p-6 hover:shadow-lg transition"
          >
            <div className="flex items-center gap-3 mb-4">
              <Megaphone className="w-6 h-6 text-green-700" />
              <h3 className="text-xl font-semibold text-gray-900">
                {notice.title}
              </h3>
            </div>

            <p className="text-sm text-gray-500 mb-3">📅 {notice.date}</p>

            <p className="text-gray-600 mb-6">{notice.description}</p>

            <Link
              to={`/notices/${notice.id}`}
              className="inline-block w-full bg-green-700 text-white text-center font-semibold px-4 py-2 rounded-lg hover:bg-green-800 transition"
            >
              Read More
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Notices;
