import React, { useState } from "react";
import "./accordion.css";

const Accordion = (props) => {
  const [activeTab, setActiveTab] = useState(-1);
  const handleAccordionClick = (id) => {
    setActiveTab((prevActiveTab) => (prevActiveTab === id ? -1 : id));
  };

  return (
    <div className='accordion'>
      {props.accordionData.map(({ id, title, content }) => (
        <div className='accordion-item' key={id}>
          <div
            className='accordion-title'
            onClick={() => handleAccordionClick(id)}
          >
            <div>{title}</div>
            <div>{activeTab === id ? "-" : "+"}</div>
          </div>
          {activeTab === id && (
            <div
              className={`accordion-content ${activeTab === id ? "open" : ""}`}
            >
              {content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
