import { useEffect } from "react";
import Footer from "./Footer"
import Menu from "./Menu"

const Presentation = () => {
    useEffect(() => {
        document.body.classList.remove('background');
    }, []);
    return (
        <>
            <Menu />
            <div>Presentation</div>
            <Footer />
        </>
    )
}

export default Presentation