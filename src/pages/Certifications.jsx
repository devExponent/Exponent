import { FaCertificate } from "react-icons/fa";
import { Certifications } from "../DATA";
import { motion } from "framer-motion";

const MyCertifications = () => {
  const certVariant = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };
  const boxVariant = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.div
      id="certifications"
      variants={certVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className="bg-[#19294ae1]">
        <div className="w-full md:w-10/12 mx-auto text-white py-8">
          <h1 className="text-center text-2xl md:text-3xl lg:text-5xl flex justify-center gap-2 mb-7 font-extrabold text-white">
            <FaCertificate /> Certifications
          </h1>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 p-6">
            {Certifications.map((cert, i) => (
              <motion.li
                variants={boxVariant}
                className="bg-[#00000038] border border-[#808080b2] p-3 rounded-lg"
                key={i}
              >
                <img src={cert.image} alt={cert.title} />
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MyCertifications;
