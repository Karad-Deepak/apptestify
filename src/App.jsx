import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import InsightsPage from "./pages/InsightsPage";
import About from "./pages/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/insights" element={<InsightsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
