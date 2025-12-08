import NavBar from "../component/nav/NavBar";

import Aboutme from "./Aboutme";

const Header = () => {
  return (
    <div className="bg-[#111827]">
      <NavBar />
      <Aboutme />
    </div>
  );
};

export default Header;
