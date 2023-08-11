import { useEffect } from "react";
import { useTranslation } from "react-i18next"
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import studioImg from '../images/coding-man.jpg';
import workSpaceImg from '../images/coding-man.jpg';

const Presentation = () => {
    const { t } = useTranslation();
    useEffect(() => {
        document.body.classList.remove('background');
    }, []);
    return (
        <>
            <Menu />
            <div className="content">
                <h1 id="studio">{t('menu_presentation_1')}</h1>
                <p className="w-40">{t('pres_studio_1')}</p>
                <p className="w-40">{t('pres_studio_2')}</p>
                <img className="w-50 right" src={studioImg} alt="studio" />
            </div>
            <div className="content m-t-1 m-b-1">
                <h1 id="work-space">{t('menu_presentation_2')}</h1>
                <p className="w-40">
                    {t('pres_work_1')}
                </p>
                <p className="w-40">
                    {t('pres_work_2')}
                </p>
                <img className="w-50 right" src={workSpaceImg} alt="work-space" />

            </div>
            <Footer />
        </>
    )
}

export default Presentation