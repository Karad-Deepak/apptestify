import logo from "../assets/Logo.png";

function Nav() {
  return (
    <>
      <div className="flex items-start px-4 py-2 lg:px-16 lg:py-5">
        <img
          src={logo}
          alt="aptestify logo"
          className="w-18 h-8 lg:w-44 lg:h-12 shadow-md"
        />
      </div>
    </>
  );
}

export default Nav;
