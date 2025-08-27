import { motion } from "framer-motion";
import { FaUserCircle } from "react-icons/fa";

const members = [
  {
    id: 1,
    name: "Abdul Karim",
    role: "Admin",
    joinDate: "2025-07-15",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Hasan Ali",
    role: "Accountant",
    joinDate: "2025-08-10",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "Nur Mohammad",
    role: "Member",
    joinDate: "2025-08-20",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 4,
    name: "Rahima Begum",
    role: "General Member",
    joinDate: "2025-08-23",
    avatar: "https://i.pravatar.cc/150?img=4",
  },
];

const isNewMember = (joinDate) => {
  const today = new Date();
  const joined = new Date(joinDate);
  const diff = (today - joined) / (1000 * 60 * 60 * 24);
  return diff <= 30; // Joined within the last 30 days
};

const MembersOverview = () => {
  return (
    <section className="py-6 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-5">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Members <span className="text-green-700">Overview</span>
        </h2>
        <p className="mt-3 text-gray-600">
          A quick look at our active members and the latest registrations.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {members?.map((member, index) => (
          <motion.div
            key={member?.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center hover:shadow-xl transition relative"
          >
            {member?.avatar ? (
              <img
                src={member?.avatar}
                alt={member?.name}
                className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-green-600"
              />
            ) : (
              <FaUserCircle className="w-20 h-20 text-gray-400 mb-4" />
            )}

            <h3 className="text-lg font-semibold text-gray-900">
              {member?.name}
            </h3>
            <p className="text-sm text-gray-600">{member?.role}</p>

            <p className="text-xs text-gray-500 mt-2">
              Joined: {member?.joinDate}
            </p>

            {isNewMember(member?.joinDate) && (
              <span className="absolute top-3 right-3 bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                New
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MembersOverview;
