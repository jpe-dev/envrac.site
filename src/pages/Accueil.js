import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import envracBanner from "../images/banner-transparent.png";

const Accueil = () => {
    const { t } = useTranslation();

    useEffect(() => {
        document.body.classList.remove("background");
    }, []);
    return (
        <>
            <Menu />
            <div>
                <div className='w-50 justify-center h-40'>
                    <img
                        src={envracBanner}
                        alt='envrac banner'
                        className='w-80 p-t-2_5p'
                        style={{ opacity: 0.5 }}
                    />
                </div>
                <div className='banner-article w-50 right'>
                    <p>{t("accueil_1_2")}</p>
                    <p>{t("accueil_2_2")}</p>
                    <p>{t("accueil_3_2")}</p>
                </div>
            </div>
            <div className="w-100 justify-center" style={{ marginTop: '50%' }}>
                <div className="w-80 centered-content">
                    <p>{t("accueil_1_4")}</p>
                    <p>{t("accueil_2_4")}</p>
                    <p>{t("accueil_3_4")}</p>
                    <p>{t("accueil_4_4")}</p>
                    <p>{t("accueil_5_4")}</p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Accueil;
