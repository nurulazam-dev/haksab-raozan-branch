// src/pages/AboutUs.jsx
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-16 px-6 text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Us
        </motion.h1>
        <motion.p
          className="text-lg max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Welcome to the HAKSAB – Raozan Branch Religious Organization
          Management Web Application. Our mission is to foster unity, support
          spiritual growth, and strengthen community engagement through modern
          digital solutions.
        </motion.p>
      </section>

      {/* Organization Details */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Organization"
            className="rounded-2xl shadow-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-indigo-600">
            Who We Are
          </h2>
          <p className="mb-4">
            The HAKSAB – Raozan Branch is dedicated to creating a harmonious
            community that upholds religious values, encourages lifelong
            learning, and promotes welfare for all members. We embrace both
            tradition and modernity to serve the needs of our community
            effectively.
          </p>
          <p>
            This platform simplifies management tasks, enhances transparency,
            and provides easy access to essential information such as events,
            notices, and member services.
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <motion.div
          className="p-6 rounded-2xl shadow-md border border-gray-200 bg-gray-50"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl font-semibold text-indigo-600 mb-3">
            Our Mission
          </h3>
          <p>
            To provide an inclusive, transparent, and digitally connected
            platform that empowers members, strengthens financial and event
            management, and nurtures religious and social values.
          </p>
        </motion.div>

        <motion.div
          className="p-6 rounded-2xl shadow-md border border-gray-200 bg-gray-50"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h3 className="text-xl font-semibold text-indigo-600 mb-3">
            Our Vision
          </h3>
          <p>
            To be a role model for religious organizations by embracing
            technology to enhance community engagement, accountability, and
            service delivery for present and future generations.
          </p>
        </motion.div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-6 bg-gradient-to-r from-indigo-50 to-blue-50">
        <motion.h2
          className="text-3xl font-bold text-center text-indigo-600 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Our Core Values
        </motion.h2>
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { title: "Faith", desc: "Rooted in strong religious values." },
            { title: "Community", desc: "Building unity and harmony." },
            {
              title: "Transparency",
              desc: "Ensuring accountability in management.",
            },
            {
              title: "Service",
              desc: "Helping members with sincerity and care.",
            },
            {
              title: "Innovation",
              desc: "Using technology to simplify lives.",
            },
            {
              title: "Integrity",
              desc: "Honesty and fairness in all actions.",
            },
          ].map((value, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-xl shadow-md border hover:shadow-xl transition"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h4 className="text-lg font-semibold text-indigo-600 mb-2">
                {value.title}
              </h4>
              <p>{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
