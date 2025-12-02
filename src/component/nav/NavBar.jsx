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
      <div className="text-white bg-black flex items-center py-6 px-14 justify-between">
        <div className="">
          <h1 className="font-bold text-3xl">Okunlola Muhammad</h1>
        </div>

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
        <div className="md:hidden text-3xl">
          {openNavBar ? (
            <IoClose onClick={handleNavBar} />
          ) : (
            <IoMenu onClick={handleNavBar} />
          )}
        </div>
      </div>
      <ul className="flex flex-col p-6 gap-6 cursor-pointer bg-black text-white font-bold md:hidden   transform transition-all duration-300 ease-out">
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
    </>
  );
};

export default NavBar;
