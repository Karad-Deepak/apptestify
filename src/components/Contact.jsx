import { Bounce } from "react-awesome-reveal";

function Contact() {
  return (
    <>
      <section className="contact-section ">
        <div className="flex items-center ">
          <Bounce>
            <h2 className="text-xl lg:text-3xl text-center">
              Together we can future-proof your business
            </h2>
          </Bounce>
        </div>
        <div className="flex flex-col gap-4 md:gap-8 items-center">
          <span className="text-[15px] md:text-lg text-center">
            Work with our team to launch your next digital transformation
            initiative.
          </span>
          <button className="button-hover text-[15px] md:text-lg bg-rose-500 px-3 py-1 md:px-4 md:py-2 rounded-2xl text-slate-50 shadow-md">
            Contact Us
          </button>
        </div>
      </section>
    </>
  );
}

export default Contact;
