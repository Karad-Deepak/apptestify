import { Fade } from "react-awesome-reveal";
import { insights } from "../data";
import Nav from "../components/Nav";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function InsightsPage() {
  return (
    <>
      <div>
        <header className="header-bg">
          <Nav />
          <InsightHero />
        </header>
        <main>
          <Insight_content />
          <Contact />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
function InsightHero() {
  return (
    <div className="flex flex-col gap-4 lg:gap-10 text-left section-padding">
      <Fade>
        <h1 className=" text-2xl lg:text-4xl">Insights</h1>
      </Fade>
      <p className=" text-lg lg:text-2xl">
        Discover new ideas, and expert perspectives that are driving <br />
        innovation and shaping industry trends.
      </p>
    </div>
  );
}
function Insight_content() {
  return (
    <section className="section-padding">
      <div className="flex flex-col gap-5  ">
        {insights.map((insight) => (
          <div
            key={insight.name}
            className="shadow-md shadow-red-600 rounded-sm border  border-purple-800 p-5 flex flex-col lg:flex-row  gap-5 items-center "
          >
            <img
              src={insight.image}
              alt="insight"
              className="w-[70vw] h-[20vh] md:w-[35vw] md:h-[30vh] rounded-lg "
            />
            <div className="flex flex-col gap-3 lg:gap-5">
              <h3 className="text-[15px] md:text-xl text-center font-bold">
                {insight.title}
              </h3>

              <p className="text-sm md:text-lg">{insight.info}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default InsightsPage;
