import React, { useState, useEffect } from "react";
import "../App.css"; 

const ScrollIndicator = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const percent = Math.round((scrolled / totalHeight) * 100);
      setScrollPercent(percent);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {scrollPercent > 0 && (
        <div className="scroll-indicator">
          <div className="circle">
            <span className="percent-value">{scrollPercent}%</span>
          </div>
        </div>
      )}
    </>
  );
};

export default ScrollIndicator;
