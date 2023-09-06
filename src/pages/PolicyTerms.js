import { useEffect } from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

const PolicyTerms = () => {
    useEffect(() => {
        document.body.classList.add("background");
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
