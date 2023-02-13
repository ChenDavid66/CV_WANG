import React, { useState } from "react";
import { ArrowUp } from "react-bootstrap-icons";

const ScrollTopArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <div
      id="return-to-top"
      style={{ display: showScroll ? "block" : "none" }}
      onClick={scrollTop}
    >
      <ArrowUp />
    </div>
  );
};

export default ScrollTopArrow;
