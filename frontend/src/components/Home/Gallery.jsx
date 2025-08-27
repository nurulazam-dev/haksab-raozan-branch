import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const Gallery = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8"
        >
          Our Gallery
        </motion.h2>

        {/* Grid Images */}

        <div className="grid grid-cols-4 gap-2">
          <img
            src="https://img.freepik.com/free-photo/cascade-boat-clean-china-natural-rural_1417-1356.jpg"
            alt=""
            className="col-span-2 w-full h-full object-cover"
          />
          <img
            src="https://img.freepik.com/free-photo/beautiful-scenery-rock-formations-by-sea-queens-bath-kauai-hawaii-sunset_181624-36857.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <img
            src="https://img.freepik.com/free-photo/sea-beach_1203-3516.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
            alt=""
            className="w-full h-full object-cover row-span-2"
          />
          <img
            src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <img
            src="https://img.freepik.com/free-photo/group-elephants-big-green-tree-wilderness_181624-16897.jpg"
            alt=""
            className="col-span-2 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
