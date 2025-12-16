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
      <div className="text-white bg-[#19294a] flex items-center py-6 px-14 justify-between sticky top-0 z-50">
        <div className="">
          <h1 className="font-bold text-3xl">Okunlola Muhammad</h1>
        </div>

        {/* Desktop nav */}

        <ul className="items-center gap-6 cursor-pointer font-bold hidden md:flex">
          <NavItem href="#about">Home</NavItem>
          <NavItem href="#projects">Projects</NavItem>
          <NavItem href="#certifications">Certifications</NavItem>
          <NavItem href="#contact">Contact</NavItem>
          <a href="cv.pdf" download>
            <Button className="transform transition duration-300 bg-white text-black hover:scale-110 hover:text-blue-600">
              Download CV
            </Button>
          </a>
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
        className={`md:hidden bg-[#19294af1] fixed top-0 left-0 w-full h-110 z-40 overflow-auto transition-transform duration-300 ${
          openNavBar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="flex flex-col p-6 gap-6 text-white font-bold mt-25">
          <NavItem href="#about" onClick={() => setOpenNavbar(false)}>
            Home
          </NavItem>
          <NavItem href="#projects" onClick={() => setOpenNavbar(false)}>
            Projects
          </NavItem>
          <NavItem href="#certifications" onClick={() => setOpenNavbar(false)}>
            Certifications
          </NavItem>
          <NavItem href="#contact" onClick={() => setOpenNavbar(false)}>
            Contact
          </NavItem>
          <a href="cv.pdf" download>
            <Button className="transform transition duration-300 bg-white text-black hover:scale-110 hover:text-blue-600">
              Download CV
            </Button>
          </a>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
