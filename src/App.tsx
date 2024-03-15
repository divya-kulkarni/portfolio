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

function App() {
  useEffect(() => emailjs.init(process.env.REACT_APP_EMAIL_KEY!), []);
  return (
    <div className="App">
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
