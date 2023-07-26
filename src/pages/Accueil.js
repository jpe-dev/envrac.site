import { useEffect } from "react"
import Footer from "./Footer"
import Menu from "./Menu"
import { useTranslation } from "react-i18next"


const Accueil = () => {
    const { t } = useTranslation();

    useEffect(() => {
        document.body.classList.add('background');
    }, []);
    return (
        <>
            <Menu />
            <article className="banner-article">
                <p>
                    {t('accueil_1')}
                </p>
                <p>
                    {t('accueil_2')}
                </p>
                <p>
                    {t('accueil_3')}
                </p>
                <p>
                    {t('accueil_4')}
                </p>
                <p>
                    {t('accueil_5')}
                </p>
            </article>
            <Footer />
        </>
    )
}

export default Accueil