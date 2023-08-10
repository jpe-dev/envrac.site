import { useEffect } from "react";
import Menu from "../components/Menu"
import Footer from "../components/Footer"

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