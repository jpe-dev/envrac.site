import React from "react";
import { useEffect } from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Accordion from "../components/Accordion";

const Booking = () => {
  useEffect(() => {
    document.body.classList.remove("background");
  }, []);
  return (
    <>
      <Menu />
      <Accordion></Accordion>
      <Footer />
    </>
  );
};

export default Booking;
