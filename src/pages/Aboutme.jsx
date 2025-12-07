import ProfileImg from "../assets/Profile.jpeg";
import SocialMediaLinks from "../component/SocialMediaLinks";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import Button from "../component/Button";
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
  ];

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="w-10/12 lg:w-8/12 grid grid-cols-1  items-center mx-auto gap-5 md:grid-cols-2 text-white">
        <div className="order-2 md:order-1 flex flex-col gap-2">
          <p className="mb-2 text-sm text-[#2753b1] font-bold sm:text-lg">
            Learning, Building & Advancing Human-Centered Technology.
          </p>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-100">
            Hello, I am Muhammad.
          </p>
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
          <Button className="transform transition duration-300 bg-blue-400  text-white hover:scale-110 hover:bg-black ">
            View CV
          </Button>
        </div>
        <div className="order-1 md:order-2 max-sm:mb-3">
          <div className="w-full aspect-square max-w-[350px] mx-auto">
            <img
              src={ProfileImg}
              alt="profile image"
              className="rounded-full shadow-2xl shadow-[#09389742] w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
