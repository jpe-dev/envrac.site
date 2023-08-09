import { useEffect } from "react";
import Footer from "../Footer/Footer"
import Mail from "../Mail/Mail"
import Menu from "../Menu/Menu"


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