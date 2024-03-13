import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { Portfolio } from "./components/portfolio";
import { About } from "./components/aboutMe";
import { Contact } from "./components/contact";
import { NotFound } from "./components/404";
import { TnsCaseStudy } from "./components/TnsCaseStudy";
import { PortfolioCaseStudy } from "./components/PortfolioCaseStudy";
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <div className="App">
      <AnimatedCursor
        innerSize={8}
        outerSize={20}
        color="235, 99, 54"
        outerAlpha={1}
        outerStyle={{
          // border: "1px solid var(--cursor-color)",
          backgroundColor: "var(--cursor-color)",
        }}
        innerScale={1}
        outerScale={3}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "img",
          "button",
          ".link",
        ]}
      />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/works/thenujastore" element={<TnsCaseStudy />} />
        <Route path="/works/portfolio" element={<PortfolioCaseStudy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
