
import { GiHamburgerMenu } from "react-icons/gi";
import Hamburger from "./Hamburger";
import { navItems } from "./NavItems";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {

  const [navColor, setScrollValue] = useState(false);
  const changeNavColor = () => {
    if (window.scrollY > 50) {
      setScrollValue(true);
    } else {
      setScrollValue(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavColor);
    return () => {
      window.removeEventListener("scroll", changeNavColor);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 z-40 py-4  ${
        navColor ? "bg-white border-b" : "bg-violet-100"
      }`}
    >
      <div className="max-w-[90%] mx-auto hidden md:flex items-center justify-between">
        <Link to={"/"} className="text-3xl font-bold">
          SimpleFirebase
        </Link>
        <ul className="md:flex items-center hidden gap-5 text-base capitalize px-10 ">
          {navItems.map((navItem) => {
            return (
              <li key={navItem.id} className="relative group overflow-hidden">
                <NavLink
                
                  className={({ isActive }) => {
                    return isActive
                      ? "text-blue-600 font-semibold"
                      : "text-black";
                  }}
                  to={navItem.path}
                >
                  {navItem.name}
                  <span className={`absolute right-1/2 bottom-0 w-1/2 h-[3px] rounded-full bg-violet-500 transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full`}></span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="md:hidden w-full flex justify-between px-4">
        <h1 className="text-2xl text-slate-600 font-bold">
          <Link to={"/"}>SimpleFirebase</Link>
        </h1>
        <label htmlFor="hamburger">
          <span className="cursor-pointer text-3xl">
            <GiHamburgerMenu />
          </span>
        </label>
      </div>
      <Hamburger />
    </nav>
  );
};

export default Navbar;
