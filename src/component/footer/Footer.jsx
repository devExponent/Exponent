import SocialMediaLinks from "../SocialMediaLinks";
import { FaLinkedin, FaGithub, FaTwitter, FaFileAlt } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import Button from "../Button";
import { motion } from "framer-motion";

const Footer = () => {
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
  return (
    <section className=" bg-gray-900" id="contact">
      <footer className=" text-white flex flex-col gap-1 w-11/12 md:w-10/12 lg:w-8/12 mx-auto py-20">
        <p className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-100">
          Muhammad Toyeeb Okunlola.
        </p>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-bold text-gray-200">
          Frontend Software Engineer.
        </p>
        <p>Turning ideas into responsive and reliable web products.</p>

        <div className="my-6">
          <motion.p
            className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-100"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Connect With Me.
          </motion.p>
        </div>
        <div className="flex gap-4 mb-4 md:mb-0">
          <SocialMediaLinks links={links} />
        </div>

        <a
          href="https://www.google.com/maps/search/?api=1&query=Turku,Finland"
          target="_blank"
          rel="noopener noreferrer"
          className="flex  gap-1"
        >
          <FiMapPin size={20} />
          <span>Turku, Finland</span>
        </a>
      </footer>
      <a
        href="/cv.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="
        fixed bottom-6 right-6 z-50
        
        
        transition-colors
        text-xl font-bold
      "
      >
        <Button className=" bg-white flex gap-1 hover:bg-blue-500 hover:text-white items-center ">
          <FaFileAlt /> View Cv
        </Button>
      </a>
    </section>
  );
};

export default Footer;
