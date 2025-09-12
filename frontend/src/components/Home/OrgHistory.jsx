import { motion } from "framer-motion";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

const OrgHistory = () => {
  return (
    <section className="bg-gradient-to-r from-gray-100 to-gray-200 py-16 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6"
        >
          Our Organization History
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="text-lg text-gray-700 leading-relaxed mb-10 max-w-4xl mx-auto"
        >
          <span className="font-semibold text-blue-600">
            Hazrat Abul Khair Sultanpury (RH.) Association Bangladesh
          </span>{" "}
          has a deep-rooted history in serving the community with spiritual,
          educational, and social development activities. Established with the
          blessings of the holy spiritual lineage from{" "}
          <span className="font-medium">
            Satgasia Dorbar Sharif, Potiya, Chattogram
          </span>
          , our association has been dedicated to guiding generations towards
          faith, unity, and service to humanity.
        </motion.p>

        {/* Social Media Embed Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          {/* Facebook Embed */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white shadow-lg rounded-2xl overflow-hidden"
          >
            <div className="bg-blue-600 text-white p-3 flex items-center space-x-2">
              <FaFacebook size={22} />
              <h3 className="font-semibold">Facebook Updates</h3>
            </div>
            <div className="p-4">
              <iframe
                src="https://www.youtube.com/embed/rE_v0onk3JA?si=45Qvt1yo_bautGxD"
                width="100%"
                height="300"
                style={{ border: "none", overflow: "hidden" }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
                title="YouTube video player"
              ></iframe>
            </div>
          </motion.div>

          {/* YouTube Embed */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white shadow-lg rounded-2xl overflow-hidden"
          >
            <div className="bg-red-600 text-white p-3 flex items-center space-x-2">
              <FaYoutube size={22} />
              <h3 className="font-semibold">YouTube Messages</h3>
            </div>
            <div className="p-4">
              <iframe
                width="100%"
                height="300"
                src="https://www.youtube.com/embed/KxagFeTWehY?si=03ZUoo4XePGBrUbd"
                style={{ border: "none", overflow: "hidden" }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
                title="YouTube video player"
              ></iframe>
            </div>
          </motion.div>
        </div>

        {/* Instagram or extra */}
        <div className="mt-10">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-pink-500 text-white rounded-full shadow-lg hover:bg-pink-600 transition duration-300"
          >
            <FaInstagram size={22} />
            <span>Follow us on Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default OrgHistory;
