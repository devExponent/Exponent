import SocialMediaLinks from "../SocialMediaLinks";
import { FaLinkedin, FaGithub, FaTwitter, FaFileAlt } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import Button from "../Button";

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
    <section className=" bg-gray-900">
      <footer className=" text-white p-6 flex flex-col gap-2 w-11/12 md:w-10/12 lg:w-8/12 mx-auto">
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-100">
          Muhammad Toyeeb Okunlola.
        </p>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-bold text-gray-200">
          A Frontend Software Engineer in growth mode.
        </p>
        <div>
          <p>Turning ideas into responsive and reliable web products.</p>
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
        href="/Muhammad_Toyeeb_Okunlola_CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="
        fixed bottom-6 right-6 z-50
        
        
        transition-colors
        text-xl font-bold
      "
      >
        <Button className=" bg-white flex gap-1 hover:bg-blue-500 hover:text-white">
          <FaFileAlt /> View Cv
        </Button>
      </a>
    </section>
  );
};

export default Footer;
