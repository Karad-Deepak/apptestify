import logo from "../assets/Logo.png";
function Footer() {
  return (
    <>
      <div className="footer-section mt-4 md:mt-8 rounded-sm">
        <div className=" flex flex-col md:flex-row gap-5 justify-evenly ">
          <div className="flex flex-col gap-3 md:gap-6 items-start">
            <img
              src={logo}
              alt="aptestify logo"
              className="w-26 h-9 lg:w-46 lg:h-14"
            />
            <h4 className="text-lg md:text-xl">
              Pune-based,
              <br />
              Making waves globally
            </h4>
          </div>
          <div className="flex">
            <ul>
              <li>About</li>
              <li>Insights</li>
              <li>Framework</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3 md:gap-6 ">
            <span>info@torinit.com</span>
            <spam>
              Suite 300 <br />
              100 Broadview Ave <br />
              Toronto, ON M4M 3H3 <br />
              Canada
            </spam>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <span className="text-center">
            All rights reserved. © 2024 Apptestify Technologies Inc.
          </span>
        </div>
      </div>
    </>
  );
}

export default Footer;
