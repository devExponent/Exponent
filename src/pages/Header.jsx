import NavBar from "../component/nav/NavBar";

import Aboutme from "./Aboutme";
import Section1 from "./Section1";

const Header = () => {
  return (
    <div className="bg-[#111827]">
      <NavBar />
      <Aboutme />
    </div>
  );
};

export default Header;
