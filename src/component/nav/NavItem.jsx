export const NavItem = ({ children, href, onClick }) => {
  return (
    <li className="transform transition duration-300 hover:text-blue-400 hover:scale-110 cursor-pointer">
      <a href={href} onClick={onClick}>
        {children}
      </a>
    </li>
  );
};
