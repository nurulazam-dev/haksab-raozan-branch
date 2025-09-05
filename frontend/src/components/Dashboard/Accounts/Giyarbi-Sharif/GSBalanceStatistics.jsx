import { motion } from "framer-motion";
import { gsBalanceStats } from "../../../../assets/data/gsBalanceData";

const GSBalanceStatistics = () => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-5">
      {gsBalanceStats?.map((stat) => (
        <motion.div
          key={stat?.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white shadow-lg rounded-2xl px-6 py-4 flex items-center justify-between border border-gray-100"
        >
          <div>
            <p className="text-gray-500 text-sm">{stat?.title}</p>
            <h3 className="text-2xl font-semibold">{stat?.value}</h3>
          </div>
          <div className="p-3 bg-gray-100 rounded-full">{stat?.icon}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default GSBalanceStatistics;
