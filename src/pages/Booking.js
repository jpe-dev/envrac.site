import React from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Accordion from "../components/Accordion";
import { accordionData } from "../components/Accordion/booking";

const Booking = () => {
    const { t } = useTranslation();

    useEffect(() => {
        document.body.classList.remove("background");
    }, []);
    return (
        <>
            <Menu />
            <div className='content' id='koalendarWrap'>
                <h1>{t("menu_agenda")}</h1>
                <p>{t("booking_1")}</p>
                <p>{t("booking_2")}</p>
                <Accordion accordionData={accordionData}></Accordion>
            </div>
            <Footer />
        </>
    );
};

export default Booking;
