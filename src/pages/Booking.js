import React from "react";
import { useEffect } from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Accordion from "../components/Accordion";
import { accordionData } from "../components/Accordion/booking";

const Booking = () => {
  useEffect(() => {
    document.body.classList.remove("background");
  }, []);
  return (
    <>
      <Menu />
      <Accordion accordionData={accordionData}></Accordion>
      <Footer />
    </>
  );
};

export default Booking;
