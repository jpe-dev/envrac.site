import { useEffect } from "react";
import Footer from "../Footer/Footer"
import Menu from "../Menu/Menu"

const Portfolio = () => {
    useEffect(() => {
        document.body.classList.add('background');
    }, []);
    return (
        <>
            <Menu />
            <div>Portfolio</div>
            <Footer />
        </>
    )
}

export default Portfolio