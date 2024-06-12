import { Fade, Bounce } from "react-awesome-reveal";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

function PageLayout({ page }) {
  return (
    <>
      <header className="header-bg">
        <Nav />
        <div className="flex flex-col gap-4 lg:gap-10 text-left section-padding w-full md:w-1/2">
          <Fade>
            <h1 className=" text-lg lg:text-2xl">{page.title}</h1>
          </Fade>
          <p className=" text-xl lg:text-4xl">{page.heading}</p>
        </div>
      </header>
      <main>
        <section className="section-padding flex flex-col md:flex-row gap-5 md:gap-8 lg:gap-10 ">
          <div className="flex flex-col gap-3 lg:gap-6 items-center  ">
            <Bounce>
              <h2 className="text-xl lg:text-3xl">{page.section_heading}</h2>
            </Bounce>
            <p className="text-[14px] lg:text-xl">{page.section_info}</p>
          </div>

          <div className="flex flex-col gap-2 lg:gap-7 py-6 px-5 lg:px-10 lg:py-12 shadow-2xl rounded-lg items-center ">
            <h3 className="text-6xl lg:text-[100px] text-rose-500 font-bold ">
              {page.number}
            </h3>
            <p className="text-[12px] lg:text-lg">{page.number_info}</p>
          </div>
        </section>
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default PageLayout;
