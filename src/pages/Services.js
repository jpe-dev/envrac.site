import { useEffect } from "react";
import { useTranslation, Trans } from "react-i18next";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

import record from "../images/record.png";
import mix from "../images/mix.png";
import master from "../images/master.png";

const Services = () => {
    const { t } = useTranslation();

    useEffect(() => {
        document.body.classList.remove("background");
    }, []);
    return (
        <>
            <Menu />
            <div className='content'>
                <h1>Audio</h1>
                <p>
                    <Trans i18nKey='service_audio_intro_1'>
                        EnVRAC propose de l’enregistrement audio, du mixage, du
                        mastering.
                        <br />
                        Ainsi que du beatmaking, de la composition et de
                        l’arrangement.
                    </Trans>
                </p>
                <p>{t("service_audio_intro_2")}</p>
                <p>
                    <Trans i18nKey='service_audio_intro_3'>
                        En disposant de différents forfaits, nous garantissons
                        un service adapté à tous.
                        <br />
                        (Tous les détails dans l’onglet{" "}
                        <a href='/booking'>RESERVATION</a>)
                    </Trans>
                </p>
                <p>{t("service_audio_intro_4")}</p>
                <hr></hr>
                <div className='flex-row space-between'>
                    <img className='audio-img' src={record} alt='record' />
                    <div className='w-75'>
                        <p>
                            <Trans i18nKey='service_audio_rec_1'>
                                L'
                                <span className={t("span_purple")}>
                                    ENREGISTREMENT
                                </span>
                                est une étape cruciale dans la production car
                                cela garantit un résultat optimal pour la suite
                                du processus.
                            </Trans>
                        </p>
                        <p>{t("service_audio_rec_2")}</p>
                        <p>{t("service_audio_rec_3")}</p>
                    </div>
                </div>
            </div>
            <div className='content' style={{ marginTop: "5rem" }}>
                <div className='flex-row space-between'>
                    <img className='audio-img' src={mix} alt='record' />
                    <div className='w-75'>
                        <p>
                            <Trans i18nKey='service_audio_mix_1'>
                                Le
                                <span className={t("span_purple")}>MIXAGE</span>
                                est un processus très important, durant lequel
                                on gères et mélange les différentes sources
                                sonores entre elles. S’ajoute à ça, la gestion
                                de la dynamique, la stéréo, les effets et plus
                                encore.
                            </Trans>
                        </p>
                        <p>{t("service_audio_mix_2")}</p>
                        <p>{t("service_audio_mix_3")}</p>
                        <p>{t("service_audio_mix_4")}</p>
                    </div>
                </div>
            </div>
            <div className='content' style={{ marginTop: "5rem" }}>
                <div className='flex-row space-between'>
                    <img className='audio-img' src={master} alt='record' />
                    <div className='w-75'>
                        <p>
                            <Trans i18nKey='service_audio_master_1'>
                                Le
                                <span className={t("span_purple")}>
                                    MASTERING
                                </span>
                            </Trans>
                        </p>
                        <p>{t("service_audio_master_2")}</p>
                        <p>{t("service_audio_master_3")}</p>
                        <p>{t("service_audio_master_4")}</p>
                        <p>{t("service_audio_master_5")}</p>
                        <p>{t("service_audio_master_6")}</p>
                        <p>{t("service_audio_master_7")}</p>
                        <p>
                            <Trans i18nKey='service_audio_master_8'>
                                Traitement jusqu’à 6 groupes (STEMS), permettant
                                d’avoir le contrôle sur plus d’élément lors du
                                processus.
                                <br />
                                Exemple groupe : VOIX, SYNTH, BASS, DRUMS, FX,
                                ou autres ; en fonction des besoins.
                            </Trans>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Services;
