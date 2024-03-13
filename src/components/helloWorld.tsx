import "../styling/helloWorld.css";
import { VaraText } from "./VaraText";

export const HelloWorld = () => {
  return (
    <div className="hello">
      <h1>
        Hello <span>World</span>
      </h1>
      <VaraText text="Alexey" />
      <h5>Scroll to explore</h5>
    </div>
  );
};
