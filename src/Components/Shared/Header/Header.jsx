import { NavLink, useLocation } from "react-router-dom";
import logo1 from "../../../assets/Logo.png";

import "./Header.css";

const Header = () => {

  const navData = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/donation"}>Donation</NavLink>
      </li>
      <li>
        <NavLink to={"/statistics"}>Statistics</NavLink>
      </li>
    </>
  );
  return (
    <div>
        <div className="navbar max-w-7xl mx-auto flex justify-between cover-body">
            <div className="h-9 md:h-16 lg:h-16">
              <img className="h-9 md:h-16 lg:h-16" src={logo1} alt="" />
            </div>
            <div className="end">
              <ul id="sidebar" className=" px-1 lg:text-lg flex gap-3 md:gap-4 lg:gap-10">
                {navData}
              </ul>
            </div>
        </div>
    </div>
  );
};

export default Header;
