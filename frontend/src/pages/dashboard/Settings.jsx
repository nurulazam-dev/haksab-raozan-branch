import { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaPhone, FaSave, FaEdit } from "react-icons/fa";

const Settings = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+880 1234 567890",
  });

  const [editMode, setEditMode] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Call API to save user profile here
    console.log("Updated Profile:", user);
    setEditMode(false);
  };

  return (
    <motion.div
      className="p-6 bg-white rounded-2xl shadow-lg max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center gap-2">
        <FaUser className="text-blue-600" /> User Settings
      </h2>

      <div className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-gray-600 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            readOnly={!editMode}
            className={`w-full mt-1 p-3 border rounded-lg focus:outline-none ${
              editMode
                ? "border-blue-500 focus:ring focus:ring-blue-200"
                : "bg-gray-100 cursor-not-allowed"
            }`}
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-600 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            readOnly={!editMode}
            className={`w-full mt-1 p-3 border rounded-lg focus:outline-none ${
              editMode
                ? "border-blue-500 focus:ring focus:ring-blue-200"
                : "bg-gray-100 cursor-not-allowed"
            }`}
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-gray-600 font-medium">Phone</label>
          <input
            type="text"
            name="phone"
            value={user?.phone}
            onChange={handleChange}
            readOnly={!editMode}
            className={`w-full mt-1 p-3 border rounded-lg focus:outline-none ${
              editMode
                ? "border-blue-500 focus:ring focus:ring-blue-200"
                : "bg-gray-100 cursor-not-allowed"
            }`}
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-3 mt-6">
        {!editMode ? (
          <button
            onClick={() => setEditMode(true)}
            className="flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            <FaEdit /> Edit Profile
          </button>
        ) : (
          <button
            onClick={handleSave}
            className="flex items-center gap-2 px-5 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
          >
            <FaSave /> Save Changes
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default Settings;
