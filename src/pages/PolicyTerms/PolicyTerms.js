import { useEffect } from "react";
import Footer from "../Footer/Footer";
import Menu from "../Menu/Menu";

const PolicyTerms = () => {
  useEffect(() => {
    document.body.classList.add('background');
  }, []);
  return (
    <>
      <Menu />
      <div>Policy Terms</div>
      <Footer />
    </>
  );
};

export default PolicyTerms;
