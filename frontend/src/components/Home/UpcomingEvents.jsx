import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaCalendarDay, FaMapMarkerAlt } from "react-icons/fa";

const events = [
  {
    id: 1,
    title: "Monthly Giyarbi Sharif",
    date: "2025-09-05",
    time: "7:00 PM",
    location: "Raozan Central Jame Masjid",
    description:
      "A monthly spiritual gathering with prayers, recitation, and community dinner.",
  },
  {
    id: 2,
    title: "General Meeting",
    date: "2025-09-10",
    time: "4:00 PM",
    location: "Community Hall, Raozan",
    description:
      "Discussion on upcoming projects, financial updates, and member responsibilities.",
  },
  {
    id: 3,
    title: "Annual Mahfil",
    date: "2025-12-15",
    time: "6:30 PM",
    location: "Raozan Stadium",
    description:
      "Annual Mahfil featuring guest scholars, Quran recitations, and cultural programs.",
  },
];

const UpcomingEvents = () => {
  return (
    <section className="py-6 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-5">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Upcoming <span className="text-green-700">Events</span>
        </h2>
        <p className="mt-3 text-gray-600">
          Stay updated with our upcoming programs, meetings, and Mahfil.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {events?.map((event, index) => (
          <motion.div
            key={event?.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col justify-between hover:shadow-xl transition"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {event?.title}
              </h3>

              <p className="text-gray-600 text-sm mb-4">{event?.description}</p>

              <div className="flex items-center gap-2 text-gray-700 text-sm mb-2">
                <FaCalendarDay className="w-4 h-4 text-green-600" />
                <span>
                  {event?.date} • {event?.time}
                </span>
              </div>

              <div className="flex items-center gap-2 text-gray-700 text-sm">
                <FaMapMarkerAlt className="w-4 h-4 text-red-600" />
                <span>{event?.location}</span>
              </div>
            </div>

            <div className="mt-6">
              <Link
                to={`/events/${event?.id}`}
                className="inline-block w-full bg-green-700 text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-800 transition"
              >
                View Details
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingEvents;
