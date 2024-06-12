import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import InsightsPage from "./pages/InsightsPage";
import About from "./pages/About";
import Custmer from "./pages/Custmer";
import Services from "./pages/Services";
import Data from "./pages/Data";
import Operations from "./pages/Operations";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/customer-experience" element={<Custmer />} />
          <Route path="/modern-operations" element={<Operations />} />
          <Route path="/data-insights" element={<Data />} />
          <Route path="/application-services" element={<Services />} />

          <Route path="/about" element={<About />} />
          <Route path="/insights" element={<InsightsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
