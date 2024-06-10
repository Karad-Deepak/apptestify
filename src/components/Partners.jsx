import { Bounce } from "react-awesome-reveal";
import { partners } from "../data";
function Partners() {
  return (
    <>
      <section className="section-padding flex flex-col gap-5 md:gap-8 lg:gap-10 bg-purple-950 text-slate-50">
        <div className="flex flex-col gap-3 lg:gap-6 items-center ">
          <Bounce>
            <h2 className="text-xl lg:text-3xl">
              Partners in Digital Transformation
            </h2>
          </Bounce>
          <p className="text-[14px] lg:text-xl">
            Partnership isnt just providing quality service, its about outcomes.
            We develop win-win-win strategies that empower you to bring
            transformative technology solutions to your organization. We take
            pride in being proactive and adaptable critical thinkers who have a
            fierce commitment to results and exceeding our clients expectations.
          </p>
        </div>
        <div className="flex flex-col gap-6 items-center lg:grid grid-cols-2  lg:gap-8">
          {partners.map((item) => (
            <div
              key={item.name}
              className="flex flex-col gap-2 lg:gap-7 py-6 px-5 lg:px-8 lg:py-8 shadow-2xl rounded-lg "
            >
              <h3 className="text-[17px] lg:text-2xl text-rose-500">
                {item.name}
              </h3>
              <p className="text-[12px] lg:text-lg">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Partners;
