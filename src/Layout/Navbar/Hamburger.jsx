import { FaWindowClose } from "react-icons/fa";
import { navItems } from "./NavItems";
import { NavLink } from "react-router-dom";
import { useRef } from "react";

const Hamburger = () => {
  const inputRef = useRef();
  const handleClick = () => {
    inputRef?.current?.click();
  };
  return (
    <div className="lg:hidden">
      <input
        id="hamburger"
        type="checkbox"
        className="peer hidden"
        ref={inputRef}
      />
      <label
        htmlFor="hamburger"
        className="fixed top-0 left-0 h-full w-full bg-black opacity-30 hidden peer-checked:block"
      ></label>
      <div className=" fixed z-50 top-0 left-0 h-full md:w-[40%] w-[65%] bg-white peer-checked:block duration-150 translate-x-[-100%] peer-checked:translate-x-0">
        <div className="flex justify-between px-1">
          <div className="text-2xl text-slate-500 font-bold">
            EmailPasswordAuth
          </div>
          <label htmlFor="hamburger" className="text-2xl m-2 cursor-pointer">
            <FaWindowClose />
          </label>
        </div>
        <div>
          <ul className="ms-1 text-xl font-semibold text-black uppercase">
            {navItems.map((navItem) => {
              return (
                <li key={navItem.name}>
                  <NavLink
                    onClick={handleClick}
                    className={({ isActive }) => {
                      return isActive ? "text-blue-600" : "text-black";
                    }}
                    to={navItem.path}
                  >
                    {navItem.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
