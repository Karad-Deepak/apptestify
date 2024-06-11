import { Bounce } from "react-awesome-reveal";
import { insights } from "../data";

function Insights() {
  return (
    <>
      <section className="section-padding flex flex-col gap-5 md:gap-8 lg:gap-10 text-gray-950 items-center">
        <Bounce>
          <h2 className="text-xl lg:text-3xl">Solutions that drive results</h2>
        </Bounce>
        <p className="text-[14px] lg:text-xl">
          End-to-end solutions focused on growth, innovation, optimization, and
          resiliency that leverage technology in an increasingly competitive
          digital landscape.
        </p>
        <div className="flex flex-col gap-5 lg:flex-row justify-evenly ">
          {insights.map((insight) => (
            <div
              key={insight.name}
              className="shadow-md shadow-red-600 rounded-sm border border-purple-800 p-5 flex flex-col gap-5 items-center "
            >
              <img
                src={insight.image}
                alt="insight"
                className="w-[70vw] h-[20vh] md:w-[25vw] md:h-[25vh] rounded-lg"
              />
              <h3 className="text-[15px] md:text-xl">{insight.title}</h3>

              <spam className="text-rose-500">Read More</spam>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Insights;
