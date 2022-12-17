import React, { useState } from "react";
import { FaBars, FaTimes, FaStar } from "react-icons/fa";
import { NavData } from "../data/NavData";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  const activeLink =
    "flex items-center justify-center text-2xl capitalize space-x-1 font-bold bg-green-900 rounded py-3 px-3 text-white";
  const normalLink =
    "flex items-center justify-center text-2xl capitalize space-x-1 font-bold ";

  return (
    <React.Fragment>
      <section>
        <div className="h-20 w-auto flex justify-between bg-blue-300 items-center px-10 md:px-40">
          {/* logo section */}
          <div>
            <FaStar className="w-10 h-10 text-white bg-green-900 rounded" />
          </div>

          {/* large screen section */}
          <div className="hidden md:flex md:justify-center md:items-center md:space-x-10">
            {NavData.map((item, index) => {
              return (
                <div key={index}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    <div>{item.icon}</div>
                    <div>{item.title}</div>
                  </NavLink>
                </div>
              );
            })}
          </div>

          {/* small screen section */}
          <div className="md:hidden">
            <div>
              <div className="text-2xl">
                {toggle === false ? (
                  <FaBars onClick={handleToggle} />
                ) : (
                  <FaTimes onClick={handleToggle} />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section for mobile navItems because it is absolute */}
      <section className='md:hidden'>
        {
            toggle && (
                <div className="w-full h-96 bg-transparent grid grid-rows-4 pt-10 font-bold justify-center">
                {NavData.map((item, index) => {
                  return (
                    <div key={index}>
                      <Link to ={item.path}>
                      <div className="flex items-center text-2xl capitalize space-x-1">
                        <div>{item.icon}</div>
                        <div>{item.title}</div>
                      </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            )
        }

      </section>
    </React.Fragment>
  );
};

export default Navbar;
