import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { Portfolio } from "./pages/portfolio";
import { About } from "./pages/aboutMe";
import { Contact } from "./pages/contact";
import { NotFound } from "./pages/404";
import { TnsCaseStudy } from "./pages/tnsCaseStudy";
import { PortfolioCaseStudy } from "./pages/portfolioCaseStudy";
import { useEffect } from "react";
import emailjs from "emailjs-com";
import AnimatedCursor from "react-animated-cursor";

function App() {
  useEffect(() => emailjs.init(process.env.REACT_APP_EMAIL_KEY!), []);
  return (
    <div className="App">
      <AnimatedCursor
        innerSize={10}
        outerSize={18}
        color="231, 106, 61"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        outerStyle={{
          border: "1px solid rgb(231, 106, 61)",
        }}
        clickables={["a", "img", "button", ".link"]}
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
