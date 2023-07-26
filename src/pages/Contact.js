import { useEffect } from "react";
import Footer from "./Footer"
import Mail from "./Mail"
import Menu from "./Menu"


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