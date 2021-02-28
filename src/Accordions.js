import React, { useState } from "react";
import Accordion from './Accordion';
import './_Accordion.scss';

function Accordions({ data }) {
  const [active, setActive] = useState(null);
  const handleActive = (e) => {
    console.log(active);
    console.log(e.currentTarget.id);
    if (active === e.currentTarget.id) {
      setActive(-1);
      return;
    }
    setActive(e.currentTarget.id);
  };
  return (
    <div>
      {data.map((item, index) => {
        if (index === parseInt(active))
          return (
            <div
              onClick={handleActive}
              id={index}
              className="wrapper"
              key={index}
            >
              <Accordion
                title={item.title}
                content={item.content}
                openStatus={true}
        
              />
            </div>
          );
        else {
          return (
            <div
              onClick={handleActive}
              id={index}
              className="wrapper"
              key={index}
            >
              <Accordion
                title={item.title}
                content={item.content}
                openStatus={false}
           
              />
            </div>
          );
        }
      })}
    </div>
  );
}

export default Accordions;
