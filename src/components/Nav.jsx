import menu from "../assets/menu.png";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import { useState } from "react";

function Nav() {
  const [isMobileNav, setMobileNav] = useState(false);
  const [isOpen, setOpen] = useState(false);
  function handleMobileNav() {
    setMobileNav(!isMobileNav);
  }
  function handleOpen() {
    setOpen(!isOpen);
  }
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
        <Navbar handleOpen={handleOpen} isOpen={isOpen} />
        <Menu handleMobileNav={handleMobileNav} />
      </div>
      {isMobileNav && (
        <Mobile
          handleMobileNav={handleMobileNav}
          handleOpen={handleOpen}
          isOpen={isOpen}
        />
      )}
    </>
  );
}
function Navbar({ handleOpen, isOpen }) {
  return (
    <>
      <nav className="hidden  md:flex flex-row gap-2 md:gap-12 md:pr-16 pt-2  md:text-lg">
        <div className="flex flex-col gap-1">
          <span className="link-hover" onClick={handleOpen}>
            Our Solutions {isOpen ? "🔻" : "🔺"}
          </span>
          {isOpen && (
            <div className="flex flex-col gap-3 md:gap-4 text-sm items-center ">
              <Link to="/customer-experience">
                <span className="link-hover">Customer Experience</span>
              </Link>
              <Link to="/modern-operations">
                <span className="link-hover">Modern Operations</span>
              </Link>
              <Link to="/data-insights">
                <span className="link-hover">Data & Insights</span>
              </Link>
              <Link to="/application-services">
                <span className="link-hover">Application Services</span>
              </Link>
            </div>
          )}
        </div>

        <Link to="/insights">
          <button className="link-hover">Insights</button>
        </Link>
        <Link to="/about">
          <button className="link-hover">About</button>
        </Link>
      </nav>
    </>
  );
}

function Menu({ handleMobileNav }) {
  return (
    <>
      <div className="flex items-center md:hidden pt-1 pr-5 ">
        <button onClick={handleMobileNav}>
          <img src={menu} alt="mobile menu" className="w-7 h-8" />
        </button>
      </div>
    </>
  );
}

function Mobile({ handleMobileNav, handleOpen, isOpen }) {
  return (
    <>
      <nav className="flex  md:hidden flex-col gap-3 pt-7 text-lg items-center bg-slate-900 pb-[50vh]">
        <div className="flex flex-col gap-1 ">
          <span className="link-hover" onClick={handleOpen}>
            Our Solutions {isOpen ? "🔻" : "🔺"}
          </span>
          {isOpen && (
            <div className="flex flex-col gap-3 text-sm items-center ">
              <Link to="/customer-experience">
                <span className="link-hover">Customer Experience</span>
              </Link>
              <Link to="/modern-operations">
                <span className="link-hover">Modern Operations</span>
              </Link>
              <Link to="/data-insights">
                <span className="link-hover">Data & Insights</span>
              </Link>
              <Link to="/application-services">
                <span className="link-hover">Application Services</span>
              </Link>
            </div>
          )}
        </div>

        <Link to="/insights">
          <span className="link-hover">Insights</span>
        </Link>
        <Link to="/about">
          <span className="link-hover">About</span>
        </Link>
        <button onClick={handleMobileNav} className="mt-7  ml-[80vw]">
          ❌
        </button>
      </nav>
    </>
  );
}

export default Nav;
