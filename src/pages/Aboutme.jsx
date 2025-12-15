import ProfileImg from "../assets/Profile.jpeg";
import SocialMediaLinks from "../component/SocialMediaLinks";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import Button from "../component/Button";
import { FiMapPin } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { motion } from "framer-motion";

const Aboutme = () => {
  const socialLinksStyle =
    "bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition-colors";
  const links = [
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/muhammad-toyeeb-okunlola/",
      size: 20,
      className: socialLinksStyle,
    },
    {
      icon: FaGithub,
      url: "https://github.com/devExponent",
      size: 20,
      className: socialLinksStyle,
    },
    {
      icon: FaTwitter,
      url: "https://x.com/_adem0la",
      size: 20,
      className: socialLinksStyle,
    },
    {
      icon: HiOutlineMail,
      url: "https://mail.google.com/mail/?view=cm&fs=1&to=okunlolamuhammadtoyeeb1@gmail.com",
      size: 20,
      className: socialLinksStyle,
    },
  ];

  const aboutvariant = {
    hidden: { opacity: 0, y: -80 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        delay: 0.5,
      },
    },
  };

  return (
    <motion.section
      className="min-h-screen flex items-center justify-center"
      id="about"
      variants={aboutvariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="w-10/12 lg:w-8/12 grid grid-cols-1  items-center mx-auto gap-5 md:grid-cols-2 text-white">
        <div className="order-2 md:order-1 flex flex-col gap-2">
          <motion.p
            className="mb-2 text-sm text-[#2753b1] font-bold sm:text-lg"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 3,
              // repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Learning, Building & Advancing Human-Centered Technology.
          </motion.p>
          <motion.p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-100">
            Hello, I am Muhammad.
          </motion.p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-bold text-gray-200">
            A Frontend Software Engineer in growth mode.
          </p>
          <p>
            I transform ideas into user-friendly, interactive web applications.
            Continuously developing practical skills in React.js, modern
            JavaScript frameworks, and cloud technologies, with hands-on
            experience in state management, server-side rendering, component
            design, and performance optimization.
          </p>
          <SocialMediaLinks links={links} />
          <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
            <Button className="transform transition duration-300 bg-blue-400  text-white hover:scale-110 hover:bg-black ">
              View CV
            </Button>
          </a>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Turku,Finland"
            target="_blank"
            rel="noopener noreferrer"
            className="flex  gap-1 mt-3"
          >
            <FiMapPin size={20} />
            <span>Turku, Finland</span>
          </a>
        </div>
        <div className="order-1 md:order-2 max-sm:mb-3">
          <motion.div
            className="w-full aspect-square max-w-[350px] mx-auto"
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.5 },
            }}
          >
            <img
              src={ProfileImg}
              alt="profile image"
              className="rounded-full shadow-2xl shadow-[#09389742] w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Aboutme;
