import { useEffect } from "react";
import Footer from "./Footer";
import Menu from "./Menu";
import studioImg from '../images/coding-man.jpg';
import workSpaceImg from '../images/coding-man.jpg';

const Presentation = () => {
    useEffect(() => {
        document.body.classList.remove('background');
    }, []);
    return (
        <>
            <Menu />
            <div className="content">
                <h1 id="studio">le studio</h1>
                <p className="w-40">Basé à Echallens, EnVRAC studio est spécialisé dans l’enregistrement de voix et le mixage professionnel.</p>
                <p className="w-40">Le studio est composé d’un Control room principal et d’une petite Guest room.</p>
                <p className="w-40">La polyvalence qu’offre les locaux permet de proposer différents services annexes, axés autour de la production musicale. (Voix off, Interview, Shooting photo, Artwork, etc.)</p>
                <img className="w-50 right" src={studioImg} alt="image of studio" />
            </div>
            <div className="content m-t-1">
                <h1 id="work-space">le work-space</h1>
                <p className="w-40">
                    Un espace de Co-working équipé et dédié à la création visuelle, nous permet de proposer différents services annexes, axés autour de la production musicale. (voix off, interview, émissions, shooting photo, fond vert, artwork, etc.)
                </p>
                <img className="w-50 right" src={workSpaceImg} alt="image of studio" />

            </div>
            <Footer />
        </>
    )
}

export default Presentation