import Button from "../Button";
import { NavItem } from "./NavItem";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";

const NavBar = () => {
  const [openNavBar, setOpenNavbar] = useState(false);
  function handleNavBar() {
    setOpenNavbar((prevNav) => !prevNav);
  }
  return (
    <>
      <div className="text-white bg-[#19294ae1] flex items-center py-6 px-14 justify-between sticky top-0">
        <div className="">
          <h1 className="font-bold text-3xl">Okunlola Muhammad</h1>
        </div>

        {/* Desktop nav */}

        <ul className="items-center gap-6 cursor-pointer font-bold hidden md:flex">
          <NavItem>Home</NavItem>
          <NavItem>Projects</NavItem>
          <NavItem>Achievements</NavItem>
          <NavItem>Contact</NavItem>
          <li>
            <Button className="transform transition duration-300 bg-white text-black hover:scale-110 hover:text-blue-600">
              Download CV
            </Button>
          </li>
        </ul>
        <div className="md:hidden text-3xl z-20">
          {openNavBar ? (
            <IoClose onClick={handleNavBar} />
          ) : (
            <IoMenu onClick={handleNavBar} />
          )}
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden   overflow-auto transition-all duration-700 ease-in-out ${
          openNavBar ? "h-96" : "h-0"
        }`}
      >
        <ul className="flex flex-col p-6 gap-6 bg-[#19294a67] text-white font-bold">
          <NavItem>Home</NavItem>
          <NavItem>Projects</NavItem>
          <NavItem>Achievements</NavItem>
          <NavItem>Contact</NavItem>
          <li>
            <Button className="transform transition duration-300 bg-white text-black hover:scale-110 hover:text-blue-600">
              Download CV
            </Button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
