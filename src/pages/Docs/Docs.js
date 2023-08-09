import { useEffect } from "react";
import Footer from "../Footer/Footer"
import Menu from "../Menu/Menu"

const Docs = () => {
    useEffect(() => {
        document.body.classList.add('background');
    }, []);
    return (
        <>
            <Menu />
            <div>Docs</div>
            <Footer />
        </>
    )
}

export default Docs