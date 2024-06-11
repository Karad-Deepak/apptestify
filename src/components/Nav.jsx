import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";

function Nav() {
  return (
    <>
      <div className=" flex justify-between px-4 py-2 lg:px-16 lg:py-5">
        <Link to="/">
          <img
            src={logo}
            alt="aptestify logo"
            className="w-18 h-8 lg:w-44 lg:h-12 "
          />
        </Link>
        <Navbar />
      </div>
    </>
  );
}

function Navbar() {
  return (
    <>
      <nav className="flex flex-row gap-2 md:gap-12 md:pr-16 pt-2 text-sm md:text-lg">
        <Link to="/insights">
          <span className="link-hover">Insights</span>
        </Link>
        <Link to="/about">
          <span className="link-hover">About</span>
        </Link>
      </nav>
    </>
  );
}

export default Nav;
