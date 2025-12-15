import { Projects } from "../DATA";
import { FaFolderOpen, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const MyProjects = () => {
  const projectvariant = {
    hidden: {},
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },

    // hidden: {},
    // show: {
    //   opacity: 1,
    //   y: [0, -10, 0],
    //   transition: {
    //     duration: 3,
    //     repeat: Infinity,
    //     ease: "easeInOut",
    //     repeatType: "loop",
    //   },
    // },
  };
  return (
    <motion.div
      className="bg-[#111827]"
      id="projects"
      variants={projectvariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="w-full md:w-11/12 mx-auto text-white pb-[10rem]">
        <h1 className="text-center text-2xl md:text-3xl lg:text-5xl flex justify-center gap-2 mb-7 font-extrabold text-white">
          <FaFolderOpen /> My Projects
        </h1>
        <motion.div
          animate={{
            y: [0, -10, 0],
            transition: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "loop",
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-white p-6"
        >
          {Projects.map((projectsLists, index) => {
            const { image, name, stack, description, link } = projectsLists;
            return (
              <div
                className="bg-[#00000038] border border-[#808080b2] p-3 rounded-lg"
                key={index}
              >
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                >
                  <div>
                    <img
                      src={image}
                      alt={name}
                      className="w-full h-32 sm:h-40 md:h-48  object-cover rounded-md"
                    />
                  </div>
                  <div className="flex justify-between my-3">
                    <ul className="flex gap-2  items-center">
                      {stack.map((StacksIcon, index) => (
                        <li key={index}>
                          <StacksIcon className="text-xl lg:text-3xl text-blue-300" />
                        </li>
                      ))}
                    </ul>
                    <a
                      href={link}
                      target="_blank"
                      className="text-blue-300 flex gap-1 items-center"
                    >
                      View project <FaArrowRight />
                    </a>
                  </div>
                  <h2 className="font-bold">{name}</h2>
                  <p>{description}</p>
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MyProjects;
