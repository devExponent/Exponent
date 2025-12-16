import { Education } from "../DATA";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const MyEducation = () => {
  const eduvariant = {
    hidden: {},
    show: { transition: { staggerChildren: 0.5 } },
  };

  const childVariant = {
    hidden: (direction) => ({ opacity: 0, x: direction * 100 }),
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.section
      className="bg-[#19294ae1] py-15"
      variants={eduvariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="w-10/12 md:w-10/12 lg:w-8/12 mx-auto text-white">
        <h1 className="text-center text-2xl md:text-3xl  lg:text-5xl flex justify-center gap-2 mb-8 font-extrabold text-white">
          <FaGraduationCap />
          My Education
        </h1>

        {Education.map((education, index) => (
          <motion.div
            variants={childVariant}
            custom={index % 2 === 0 ? 1 : -1}
            key={index}
            className="flex flex-col md:flex-row gap-5 items-center rounded-xl p-6 my-5 bg-[#80808028]"
          >
            <div>
              <img
                src={education.logo}
                alt="University of Ilorin Logo"
                className="w-30 sm:w-35 md:w-40 lg:w-45 h-auto"
              />
            </div>
            <div className="flex-1">
              <div className="flex lg:items-center lg:justify-between w-full max-lg:flex-col">
                <span className="font-bold text-xl">{education.course}</span>
                <span className="font-bold">{education.date}</span>
              </div>
              <div>
                <span className="font-extrabold text-lg">
                  {education.institution}
                </span>
                <p className="w-full lg:text-justify">
                  {education.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default MyEducation;
