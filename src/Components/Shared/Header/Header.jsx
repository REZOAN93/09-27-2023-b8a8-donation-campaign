import { NavLink } from "react-router-dom";
import logo1 from "../../../assets/Logo.png";
import "./Header.css";

const Header = () => {
  const navData = (
    <>
      <li>
        <NavLink to={"/home"}>Home</NavLink>
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
      <div className="navbar bg-base-100">
        <div className="flex-1 h-9 md:h-16">
          <img className="h-9 md:h-16" src={logo1} alt="" />
        </div>
        <div className="flex-none">
          <ul
            id="sidebar"
            className="menu-horizontal px-1 text-lg flex gap-2 md:gap-4 lg:gap-10"
          >
            {navData}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
