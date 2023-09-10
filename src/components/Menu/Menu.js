import { Link } from "react-router-dom";
import envracLogo from "../../images/logo.jpeg";
import { useTranslation } from "react-i18next";
import "./menu.css";
import { useState } from "react";

const handleClickScroll = (id) => {
    setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }, 100);
};
const Menu = () => {
    const { t } = useTranslation();
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    };

    return (
        <>
            <nav className='sticky'>
                <ul className='menu'>
                    <li>
                        <Link to='/'>
                            <img src={envracLogo} alt='envrac logo' />
                        </Link>
                    </li>
                    <li>
                        <Link to='/presentation'>{t("menu_presentation")}</Link>
                        <div className='subnav'>
                            <Link
                                to='/presentation/#studio'
                                onClick={() => handleClickScroll("studio")}
                            >
                                {t("menu_presentation_1")}
                            </Link>
                            <Link
                                to='/presentation/#work-space'
                                onClick={() => handleClickScroll("work-space")}
                            >
                                {t("menu_presentation_2")}
                            </Link>
                            <Link
                                to='/presentation/#equipement'
                                onClick={() => handleClickScroll("equipement")}
                            >
                                {t("menu_presentation_5")}
                            </Link>
                            <Link
                                to='/presentation/#association'
                                onClick={() => handleClickScroll("association")}
                            >
                                {t("menu_presentation_4")}
                            </Link>
                        </div>
                    </li>
                    <li>
                        <Link to='/services'>{t("menu_services")}</Link>
                        <div className='subnav'>
                            <Link
                                to='/services/#audio'
                                onClick={() => handleClickScroll("audio")}
                            >
                                {t("menu_services_1")}
                            </Link>
                            {/* <Link to='/services/#visuel'>{t('menu_services_2')}</Link> */}
                            {/* <Link to='/services/#cours'>{t('menu_services_2')}</Link> */}
                            {/* <Link to='/services/#location'>{t('menu_services_2')}</Link> */}
                        </div>
                    </li>
                    <li>
                        <Link to='/docs'>{t("menu_docs")}</Link>
                        <div className='subnav'>
                            <Link
                                to='/docs/#lexique'
                                onClick={() => handleClickScroll("lexique")}
                            >
                                {t("menu_docs_1")}
                            </Link>
                            <Link
                                to='/docs/#faq'
                                onClick={() => handleClickScroll("faq")}
                            >
                                {t("menu_docs_2")}
                            </Link>
                        </div>
                    </li>
                    <li>
                        <Link to='/portfolio'>{t("menu_portfolio")}</Link>
                        <div className='subnav'>
                            <Link to='/portfolio/#releases'>
                                {t("menu_portfolio_1")}
                            </Link>
                            {/* <Link to='/portfolio/#blog'>{t('menu_portfolio_2')}</Link> */}
                        </div>
                    </li>
                    <li>
                        <Link to='/contact'>{t("menu_contact")}</Link>
                        <div className='subnav'>
                            <Link
                                to='/contact/#a_propos'
                                onClick={() => handleClickScroll("a_propos")}
                            >
                                {t("menu_contact_3")}
                            </Link>
                            <Link
                                to='/contact/#equipe'
                                onClick={() => handleClickScroll("equipe")}
                            >
                                {t("menu_contact_1")}
                            </Link>
                        </div>
                    </li>
                    <li>
                        <Link to='/booking'>{t("menu_agenda")}</Link>
                    </li>
                </ul>
            </nav>
            <div className='navigationHamburger'>
                <input
                    type='checkbox'
                    role='button'
                    aria-label='Display the menu'
                    class='menuToggle'
                    onClick={toggleHamburger}
                />
                <ul className={`menuHamburger ${hamburgerOpen ? "open" : ""}`}>
                    <li>
                        <Link to='/'>{t("menu_accueil")}</Link>
                    </li>
                    <li>
                        <Link to='/presentation'>{t("menu_presentation")}</Link>
                        <div className='subnavHamburger'>
                            <Link
                                to='/presentation/#studio'
                                onClick={() => handleClickScroll("studio")}
                            >
                                {t("menu_presentation_1")}
                            </Link>
                            <Link
                                to='/presentation/#work-space'
                                onClick={() => handleClickScroll("work-space")}
                            >
                                {t("menu_presentation_2")}
                            </Link>
                            <Link
                                to='/presentation/#equipement'
                                onClick={() => handleClickScroll("equipement")}
                            >
                                {t("menu_presentation_5")}
                            </Link>
                            <Link
                                to='/presentation/#association'
                                onClick={() => handleClickScroll("association")}
                            >
                                {t("menu_presentation_4")}
                            </Link>
                        </div>
                    </li>
                    <li>
                        <Link to='/services'>{t("menu_services")}</Link>
                        <div className='subnavHamburger'>
                            <Link
                                to='/services/#audio'
                                onClick={() => handleClickScroll("audio")}
                            >
                                {t("menu_services_1")}
                            </Link>
                            {/* <Link to='/services/#visuel'>{t('menu_services_2')}</Link> */}
                            {/* <Link to='/services/#cours'>{t('menu_services_2')}</Link> */}
                            {/* <Link to='/services/#location'>{t('menu_services_2')}</Link> */}
                        </div>
                    </li>
                    <li>
                        <Link to='/docs'>{t("menu_docs")}</Link>
                        <div className='subnavHamburger'>
                            <Link
                                to='/docs/#lexique'
                                onClick={() => handleClickScroll("lexique")}
                            >
                                {t("menu_docs_1")}
                            </Link>
                            <Link
                                to='/docs/#faq'
                                onClick={() => handleClickScroll("faq")}
                            >
                                {t("menu_docs_2")}
                            </Link>
                        </div>
                    </li>
                    <li>
                        <Link to='/portfolio'>{t("menu_portfolio")}</Link>
                        <div className='subnavHamburger'>
                            <Link to='/portfolio/#releases'>
                                {t("menu_portfolio_1")}
                            </Link>
                            {/* <Link to='/portfolio/#blog'>{t('menu_portfolio_2')}</Link> */}
                        </div>
                    </li>
                    <li>
                        <Link to='/contact'>{t("menu_contact")}</Link>
                        <div className='subnavHamburger'>
                            <Link
                                to='/contact/#a_propos'
                                onClick={() => handleClickScroll("a_propos")}
                            >
                                {t("menu_contact_3")}
                            </Link>
                            <Link
                                to='/contact/#equipe'
                                onClick={() => handleClickScroll("equipe")}
                            >
                                {t("menu_contact_1")}
                            </Link>
                        </div>
                    </li>
                    <li>
                        <Link to='/booking'>{t("menu_agenda")}</Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Menu;
