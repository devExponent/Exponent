import SocialMediaLinks from "../SocialMediaLinks";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

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
  ];
  return (
    <section>
      <footer className="bg-gray-900 text-white p-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p>© 2025 Muhammad Toyeeb Okunlola. All rights reserved.</p>
        </div>
        <div className="flex gap-4 mb-4 md:mb-0">
          <SocialMediaLinks links={links} />
        </div>
        <div>
          <p>Let's build something amazing together!</p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
