import { useEffect } from "react";
import Vara from "vara";

export const VaraText = ({ text }: { text: string }) => {
  useEffect(() => {
    new Vara(
      "#vara-container",
      "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Shadows-Into-Light/shadows-into-light.json",
      [
        {
          text: text,
          fontSize: 60,
          strokeWidth: 1,
          color: "#fff",
          textAlign: "center",
        },
      ]
    );
  });

  return <div id="vara-container"></div>;
};
