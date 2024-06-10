import { Fade } from "react-awesome-reveal";
function Hero() {
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row gap-7 md:flex-row lg:gap-10 items-center section-padding lg:pb-72 lg:pt-24">
        <div className="flex flex-col gap-4 lg:gap-10 text-left basis-1/2">
          <Fade>
            <h1 className=" text-2xl lg:text-4xl">
              Digital solutions designed to accelerate your growth
            </h1>
          </Fade>
          <p className=" text-[15px] lg:text-xl">
            We partner with executives to achieve their growth mandates through
            digital transformation
          </p>
        </div>
        <div className="flex text-center px-3 lg:px-10">
          <span className="uppercase animate-pulse animate-infinite animate-ease-in text-2xl lg:text-6xl  drop-shadow-2xl bg-gradient-to-r from-rose-600 to-lime-900 bg-clip-text text-transparent">
            Software Testing <br />
            Consulting <br />
            Development
          </span>
        </div>
      </div>
    </>
  );
}

export default Hero;
