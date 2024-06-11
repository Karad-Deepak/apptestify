import { Bounce, Fade } from "react-awesome-reveal";
import { values } from "../data";
import Nav from "../components/Nav";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <div>
        <header className="header-bg">
          <Nav />
          <AbouttHero />
        </header>
        <main>
          <Values />
          <Contact />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
function AbouttHero() {
  return (
    <div className="flex flex-col gap-4 lg:gap-10 text-left section-padding">
      <Fade>
        <span className=" text-lg lg:text-2xl">About us</span>
      </Fade>
      <p className=" text-xl lg:text-4xl">
        Reimagining the way technology <br />
        shapes our experiences
      </p>
    </div>
  );
}

function Values() {
  return (
    <>
      <section className="section-padding flex flex-col gap-5 md:gap-8 lg:gap-10 bg-gradient-to-r from-state-300 to-gray-300 text-slate-950">
        <div className="flex flex-col gap-3 lg:gap-6 items-center ">
          <Bounce>
            <h2 className="text-xl lg:text-3xl">Our Values</h2>
          </Bounce>
          <p className="text-[14px] lg:text-xl">
            We believe that digital transformation isnt just about technology;
            its about the people driving it. Our approach centres supporting and
            enhancing the talents of our clients and our own team. With each
            interaction, we hold ourselves accountable to staying TRUE.
          </p>
        </div>
        <div className="flex flex-col gap-6 items-center lg:grid grid-cols-2  lg:gap-8">
          {values.map((item) => (
            <div
              key={item.name}
              className="flex flex-col gap-2 lg:gap-7 py-6 px-5 lg:px-8 lg:py-8 shadow-2xl  shadow-purple-100 rounded-lg "
            >
              <h3 className="text-[17px] lg:text-2xl font-bold">{item.name}</h3>
              <p className="text-[12px] lg:text-lg">{item.info}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default About;
