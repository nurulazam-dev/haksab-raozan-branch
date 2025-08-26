import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Page Title */}
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center text-green-700 mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        যোগাযোগ করুন (Contact Us)
      </motion.h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Contact Info */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            আমাদের সাথে যোগাযোগ করুন
          </h3>
          <p className="text-gray-600 mb-6">
            যদি আপনার কোন প্রশ্ন, মতামত, বা প্রয়োজন থাকে, আমাদের সাথে যোগাযোগ
            করুন।
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-green-600 text-lg" />
              <span className="text-gray-700">+880 1234 567890</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-green-600 text-lg" />
              <span className="text-gray-700">info@haksab-raozan.org</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-green-600 text-lg" />
              <span className="text-gray-700">
                HAKSAB, Raozan Branch, Chattogram, Bangladesh
              </span>
            </div>
          </div>

          {/* Google Map */}
          <div className="mt-6 rounded-xl overflow-hidden">
            <iframe
              title="location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.5110760606597!2d90.41251841536372!3d23.81033129228651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7b6d58a0f6d%3A0xb74c1a7b0e9f3bb0!2sChattogram!5e0!3m2!1sen!2sbd!4v1690308332831!5m2!1sen!2sbd"
              width="100%"
              height="220"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            মেসেজ পাঠান
          </h3>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-600 text-sm mb-1">নাম</label>
              <input
                type="text"
                placeholder="আপনার নাম লিখুন"
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-gray-600 text-sm mb-1">ইমেইল</label>
              <input
                type="email"
                placeholder="আপনার ইমেইল লিখুন"
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-gray-600 text-sm mb-1">মেসেজ</label>
              <textarea
                rows="4"
                placeholder="আপনার মেসেজ লিখুন..."
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition"
            >
              পাঠান
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
