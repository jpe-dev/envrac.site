import { useEffect } from "react"
import Footer from "./Footer"
import Menu from "./Menu"

const Accueil = () => {
    useEffect(() => {
        document.body.classList.add('background');
    }, []);
    return (
        <>
            <Menu />

            <article className="banner-article">
                <p>
                    EnVRAC est une structure qui vise à ouvrir des opportunités dans la production
                    audiovisuelle en suisse romande.
                </p>
                <p>
                    Cette structure est fondée sur des valeurs d’entraide et de coopération entre
                    indépendants passionnés.
                </p>
                <p>
                    Le désir d’avoir des conditions de travail professionnelles et confortables, ainsi
                    qu’une relation à l’écoute des clients sont primordiaux.
                </p>
                <p>
                    Quel que soit le domaine d’exécution, EnVRAC se tient à fournir une prestation
                    optimisée pour sa clientèle.
                </p>
                <p>
                    Promouvoir la scène locale en accompagnant les néophytes comme les plus
                    expérimentés est, sans discernement, une valeur fondamentale.
                </p>
            </article>
            <Footer />
        </>
    )
}

export default Accueil