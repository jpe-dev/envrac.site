import { useEffect } from "react";
import Menu from "../components/Menu"
import Footer from "../components/Footer"

import record from '../images/record.png';
import mix from '../images/mix.png';
import master from '../images/master.png';


const Services = () => {
    useEffect(() => {
        document.body.classList.remove('background');
    }, []);
    return (
        <>
            <Menu />
            <div className="content">
                <h1>Audio</h1>

                <img className="audio-img" src={record} alt="record" />
                <div className="w-75 right audio-content">
                    <p>L’<span className="purple-text">ENREGISTREMENT</span> est une étape cruciale dans la production car cela garantit un résultat optimal pour la suite du processus.</p>
                    <p>Une mauvaise performance, un problème de diction ou un enregistrement mal effectué ne sera pas rattrapable durant le mix.</p>
                    <p>Dans le cadre d’un enregistrement, il est important d’être au clair avec sa prestation ou son texte.</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Services