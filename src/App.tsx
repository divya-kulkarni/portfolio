import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { Portfolio } from "./components/portfolio";
import { About } from "./components/aboutMe";
import { Contact } from "./components/contact";
import { NotFound } from "./components/404";
import { CaseStudy } from "./components/CaseStudy";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/works/thenujastore" element={<CaseStudy />} />
        <Route path="/works/portfolio" element={<CaseStudy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
