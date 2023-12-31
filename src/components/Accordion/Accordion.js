import React, { useState } from "react";
import "./accordion.css";
import { useTranslation } from "react-i18next";

const Accordion = (props) => {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState(-1);
    const handleAccordionClick = (id) => {
        setActiveTab((prevActiveTab) => (prevActiveTab === id ? -1 : id));
    };

    return (
        <div
            className={`accordion${props.class ? " " + props.class : ""} ${
                props.inverted ? "inverted-colors" : ""
            }`}
        >
            {props.accordionData.map(({ id, title, content }) => (
                <div className={`accordion-item`} key={id}>
                    <div
                        className={`accordion-title ${
                            activeTab === id ? "open" : ""
                        }`}
                        onClick={() => handleAccordionClick(id)}
                    >
                        <div>{t(title)}</div>
                        <div>{activeTab === id ? "-" : "+"}</div>
                    </div>
                    {activeTab === id && (
                        <div
                            className={`accordion-content ${
                                activeTab === id ? "open" : ""
                            }`}
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
