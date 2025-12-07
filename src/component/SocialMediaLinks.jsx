import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const SocialMediaLinks = ({ links }) => {
  return (
    <div className="flex flex-row gap-4 my-3 items-center">
      {links.map((item, index) => (
        <a
          key={index}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className={item.className}
        >
          <item.icon size={item.size} />
        </a>
      ))}
    </div>
  );
};

export default SocialMediaLinks;
