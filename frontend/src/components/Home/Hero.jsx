import { motion } from "framer-motion";
import logo from "../../assets/images/logo/HAKSAB_logo.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-green-800 via-green-700 to-green-900 text-white py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Logo + Intro */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to{" "}
            <span className="text-yellow-300">HAKSAB – Raozan Branch</span>
          </h1>
          <p className="text-lg leading-7 mb-6">
            Hazrat Abul Khair Sultanpury (RH.) Association Bangladesh – Raozan
            Branch. A faith-based organization dedicated to community service,
            financial transparency, and spiritual events management.
          </p>

          <Link
            to="/events"
            className="inline-block bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-yellow-300 transition"
          >
            View Upcoming Events
          </Link>
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center"
        >
          <img
            src={logo}
            alt="HAKSAB Logo"
            className="w-64 md:w-80 drop-shadow-2xl drop-shadow-amber-50"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
