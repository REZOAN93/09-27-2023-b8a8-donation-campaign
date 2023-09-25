import { NavLink, useLocation } from "react-router-dom";
import logo1 from "../../../assets/Logo.png";
import Cover from "../../Cover/Cover";
import "./Header.css";

const Header = () => {
  const location = useLocation();
  const currentLocation=location.pathname

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
      <div className={`flex flex-col ${currentLocation==='/'&&'cover-container bg-center'}`}>
        <div className="navbar max-w-7xl mx-auto flex justify-between cover-body">
          <div>
            <div className="h-9 md:h-16">
              <img className="h-9 md:h-16" src={logo1} alt="" />
            </div>
          </div>
          <div className="end">
            <ul
              id="sidebar"
              className="menu-horizontal px-1 text-lg flex gap-2 md:gap-4 lg:gap-10"
            >
              {navData}
            </ul>
          </div>
        </div>
        <div>{location.pathname === "/"?<Cover></Cover>:''}</div>
      </div>
    </div>
  );
};

export default Header;
