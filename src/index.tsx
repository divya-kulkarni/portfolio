import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <AnimatedCursor
      innerSize={8}
      outerSize={35}
      color="233, 223, 206"
      outerAlpha={0.5}
      outerStyle={{
        border: "1px solid var(--cursor-color)",
        backgroundColor: "none",
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
    <App />
  </BrowserRouter>
);
