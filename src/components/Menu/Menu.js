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
            <style jsx>{`
                .menuHamburger {
                    height: 0;
                    visibility: hidden;
                    opacity: 0;
                    overflow: hidden;
                    transition-delay: 1s;
                    transition: visibility 0.5s linear, opacity 0.5s linear,
                        height 0.5s linear;
                }
                .menuHamburger.open {
                    height: auto;
                    visibility: visible;
                    list-style-type: none;
                    transition-delay: 0.25s;
                    opacity: 1;
                }
                .navigationHamburger li {
                    padding: 0.25rem;
                    text-transform: uppercase;
                    font-size: 20pt;
                }
                .subnavHamburger {
                    font-size: 15pt;
                    display: flex;
                    flex-direction: column;
                    margin: 1rem 3rem;
                }
                .menuToggle {
                    display: none;
                    margin: 1rem -2rem;
                    --s: 100px; /* control the size */
                    --c: #ceb9d5; /* the color */

                    height: var(--s);
                    aspect-ratio: 1;
                    border: none;
                    padding: 0;
                    border-inline: calc(var(--s) / 2) solid #0000;
                    box-sizing: content-box;
                    --_g1: linear-gradient(
                            var(--c) 20%,
                            #0000 0 80%,
                            var(--c) 0
                        )
                        no-repeat content-box border-box;
                    --_g2: radial-gradient(
                            circle closest-side at 50% 12.5%,
                            var(--c) 95%,
                            #0000
                        )
                        repeat-y content-box border-box;
                    background: var(--_g2) left var(--_p, 0px) top,
                        var(--_g1) left calc(var(--s) / 10 + var(--_p, 0px)) top,
                        var(--_g2) right var(--_p, 0px) top,
                        var(--_g1) right calc(var(--s) / 10 + var(--_p, 0px))
                            top;
                    background-size: 20% 80%, 40% 100%;
                    position: relative;
                    clip-path: inset(0 25%);
                    -webkit-mask: linear-gradient(
                        90deg,
                        #0000,
                        #000 25% 75%,
                        #0000
                    );
                    cursor: pointer;
                    transition: background-position 0.3s var(--_s, 0.3s),
                        clip-path 0s var(--_s, 0.6s);
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    appearance: none;
                }
                .menuToggle:before,
                .menuToggle:after {
                    content: "";
                    position: absolute;
                    border-radius: var(--s);
                    inset: 40% 0;
                    background: var(--c);
                    transition: transform 0.3s calc(0.3s - var(--_s, 0.3s));
                }

                .menuToggle:checked {
                    clip-path: inset(0);
                    --_p: calc(-1 * var(--s));
                    --_s: 0s;
                }
                .menuToggle:checked:before {
                    transform: rotate(45deg);
                }
                .menuToggle:checked:after {
                    transform: rotate(-45deg);
                }
                .menuToggle:focus-visible {
                    clip-path: none;
                    -webkit-mask: none;
                    border: none;
                    outline: 2px solid var(--c);
                    outline-offset: 5px;
                }
                @media (orientation: portrait) {
                    @media (max-width: 1080px) {
                        .menuToggle {
                            display: block;
                        }
                        nav {
                            display: none;
                        }
                    }
                }
            `}</style>
        </>
    );
};

export default Menu;
