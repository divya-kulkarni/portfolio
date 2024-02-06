import React, { useState } from "react";
import up from "../assets/images/up.svg";
import { Button } from "react-bootstrap";
import "../assets/styling/scroll.css";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour 
		in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Button>
      <img
        src={up}
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
        alt=""
      />
    </Button>
  );
};

export default ScrollButton;
