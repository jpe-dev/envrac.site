import { useEffect } from "react";
import Menu from "../components/Menu"
import Footer from "../components/Footer"

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