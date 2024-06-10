import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Partners from "../components/Partners";
import Solutions from "../components/Solutions";

function Home() {
  return (
    <>
      <header className="bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950 text-gray-100">
        <Nav />
        <Hero />
      </header>
      <main>
        <Solutions />
        <Partners />
      </main>
    </>
  );
}

export default Home;
