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
                <div className="flex-row space-between">
                    <div className="flex-col w-40">
                        <p>{t('pres_studio_1')}</p>
                        <p>{t('pres_studio_2')}</p>
                    </div>
                    <img className="w-50" src={studioImg} alt="studio" />
                </div>
                <hr className="m-t-3"></hr>
            </div>
            <div className="content m-t-2 m-b-1">
                <h1 id="work-space">{t('menu_presentation_2')}</h1>
                <div className="flex-row space-between">
                    <div className="flex-col w-40">
                        <p>{t('pres_work_1')}</p>
                        <p>{t('pres_work_2')}</p>
                    </div>
                    <img className="w-50" src={workSpaceImg} alt="work-space" />
                </div>
                <hr className="m-t-3"></hr>
            </div>
            <div className="content m-t-2 m-b-1">
                <h1 id="equipement">{t('menu_presentation_5')}</h1>
                <div className="w-80">
                    <p>{t('pres_equ_1')}</p>
                    <p>{t('pres_equ_2')}</p>
                    <p>{t('pres_equ_3')}</p>
                    <p>{t('pres_equ_4')}</p>
                    <p>{t('pres_equ_5')}</p>
                    <p>{t('pres_equ_6')}</p>
                    <p>{t('pres_equ_7')}</p>
                </div>
                <hr className="m-t-3"></hr>
            </div>
            <div className="content m-t-2 m-b-1">
                <h1 id="association">{t('menu_presentation_4')}</h1>
                <p>{t('presentation_association_1')}</p>
                <p>{t('presentation_association_2')}</p>
                <br />
                <br />
                <p>{t('presentation_association_3')}</p>
                <p>{t('presentation_association_4')}</p>
                <p>{t('presentation_association_5')}</p>
                <p>{t('presentation_association_6')}</p>
                <p>{t('presentation_association_7')}</p>
                <p>{t('presentation_association_8')}</p>
            </div>
            <Footer />
        </>
    )
}

export default Presentation