import { useState, useRef } from "react";
import IconMenuOpen from "../icons/IconMenuOpen";
import IconMenuClose from "../icons/IconMenuClose";
import NavLink from "./NavLink";

const NavBar = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const refNavBar = useRef(null);

  const closeMenuClass =
    "absolute top-10 flex w-full items-center px-8 lg:text-white";
  const openMenuClass =
    "absolute top-10 flex w-full items-center bg-white px-8 text-black py-4 lg:py-0 justify-between lg:bg-black lg:text-white lg:justify-start lg:bg-transparent";

  const handleClickMenu = () => {
    setActiveMenu(!activeMenu);
    refNavBar.current.querySelector("#navLinks").classList.toggle("hidden");
    refNavBar.current.querySelector("#navLinks").classList.add("flex", "gap-8");

    refNavBar.current.querySelector("#navBrand").classList.toggle("hidden");
  };
  return (
    <nav
      ref={refNavBar}
      className={activeMenu ? openMenuClass : closeMenuClass}
    >
      <button className="lg:hidden" onClick={handleClickMenu}>
        {activeMenu ? <IconMenuClose /> : <IconMenuOpen />}
      </button>
      <a
        id="navBrand"
        href="#"
        className="mx-auto mb-3 pr-[20px] text-4xl text-white lg:mx-0 lg:block lg:pr-16"
      >
        room
      </a>
      <div className="hidden lg:flex lg:gap-4" id="navLinks">
        <NavLink text="home" />
        <NavLink text="shop" />
        <NavLink text="about" />
        <NavLink text="contact" />
      </div>
    </nav>
  );
};

export default NavBar;
