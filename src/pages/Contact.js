import { useEffect } from "react";
import Menu from "../components/Menu"
import Footer from "../components/Footer"
import Mail from "./Mail"


const Contact = () => {
    useEffect(() => {
        document.body.classList.add('background');
    }, []);
    return (
        <>
            <Menu />
            <Mail />
            <Footer />
        </>
    )
}

export default Contact