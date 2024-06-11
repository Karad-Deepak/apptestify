import Contact from "../components/Contact";
import Footer from "../components/Footer";

import Hero from "../components/Hero";
import Insights from "../components/Insights";
import Nav from "../components/Nav";

import Partners from "../components/Partners";
import Solutions from "../components/Solutions";

function Home() {
  return (
    <>
      <header className="header-bg">
        <Nav />
        <Hero />
      </header>
      <main>
        <Solutions />
        <Partners />
        <Insights />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Home;
