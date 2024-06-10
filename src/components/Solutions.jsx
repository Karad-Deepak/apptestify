import { Bounce } from "react-awesome-reveal";
import { solutions } from "../data";
function Solutions() {
  return (
    <>
      <section className="section-padding flex flex-col gap-5 md:gap-8 lg:gap-10">
        <div className="flex flex-col gap-3 lg:gap-6 items-center text-gray-900">
          <Bounce>
            <h2 className="text-xl lg:text-3xl">
              Solutions that drive results
            </h2>
          </Bounce>
          <p className="text-[13px] lg:text-xl">
            End-to-end solutions focused on growth, innovation, optimization,
            and resiliency that leverage technology in an increasingly
            competitive digital landscape.
          </p>
        </div>
        <div className="flex flex-col gap-6 items-center lg:grid grid-cols-2  lg:gap-8">
          {solutions.map((item) => (
            <div
              key={item.name}
              className="flex flex-col gap-3 lg:gap-5 bg-slate-800 p-5 lg:px-8 lg:py-8 text-slate-50 shadow-2xl rounded-xl hover:scale-110"
            >
              <h3 className="text-[16px] lg:text-2xl">{item.name}</h3>
              <p className="text-[10px] lg:text-lg">{item.description}</p>
              <span className="text-[12px] lg:text-lg text-rose-400 ">
                Learn more
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Solutions;
