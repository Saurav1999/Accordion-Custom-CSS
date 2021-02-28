import React, { useState, useEffect, useRef } from "react";
import arrowDownIcon from "./chevron-down.svg";

function Accordion({ openStatus, title, content }) {
  const accordionPanelRef = useRef();
  const accordionTitleRef = useRef();
  const arrowDownRef = useRef();
  const [accordionOpen, setAccordionOpen] = useState(false);
  const toggleAccordion = () => {
    setAccordionOpen(!accordionOpen);
  };
  useEffect(() => {
    if (openStatus) {
      accordionPanelRef.current.style.maxHeight = "5000px";
      accordionTitleRef.current.style.transition = "all .1s";
      accordionTitleRef.current.style.borderBottom =
        "1px solid rgba(112, 112, 112, 0)";

      accordionPanelRef.current.style.transform = "scaleY(1)";
      arrowDownRef.current.style.transform = "rotate(180deg)";
    } else {
      accordionPanelRef.current.style.maxHeight = "0px";
      accordionTitleRef.current.style.transition = "all .4s";
      accordionTitleRef.current.style.borderBottom =
        "1px solid rgba(112, 112, 112, 1)";
      accordionPanelRef.current.style.transform = "scaleY(0)";
      arrowDownRef.current.style.transform = "rotate(0deg)";
    }
  }, [openStatus]);

  return (
    <div className="accordion">
      <div
        className="accordion-title"
        ref={accordionTitleRef}
        onClick={toggleAccordion}
      >
        <div>{title}</div>
        <img src={arrowDownIcon} alt="Arrow Down" ref={arrowDownRef} />
      </div>
      <div className="panel" ref={accordionPanelRef}>
        {content}
      </div>
    </div>
  );
}

export default Accordion;
