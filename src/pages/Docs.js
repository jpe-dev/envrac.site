import { useEffect } from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Accordion from "../components/Accordion/Accordion";
import { faq } from "../components/Accordion/faq";
import { faq2 } from "../components/Accordion/faq2";
import { lexicon } from "../components/Accordion/lexicon";
import { lexicon2 } from "../components/Accordion/lexicon2";
import { useTranslation } from "react-i18next";

const Docs = () => {
    const { t } = useTranslation();
    useEffect(() => {
        document.body.classList.add("background");
    }, []);

    return (
        <>
            <Menu />
            <div className='content'>
                <h1>{t("menu_docs_1")}</h1>
                <div className='w-100 flex-row'>
                    <div className='w-50'>
                        <Accordion
                            accordionData={lexicon}
                            class={"m-t-0"}
                            inverted={true}
                        ></Accordion>
                    </div>
                    <div className='w-50'>
                        <Accordion
                            accordionData={lexicon2}
                            class={"m-t-0"}
                            inverted={true}
                        ></Accordion>
                    </div>
                </div>
                <h1>{t("menu_docs_2")}</h1>
                <div className='w-100 flex-row'>
                    <div className='w-50'>
                        <Accordion
                            accordionData={faq}
                            class={"m-t-0"}
                        ></Accordion>
                    </div>
                    <div className='w-50'>
                        <Accordion
                            accordionData={faq2}
                            class={"m-t-0"}
                        ></Accordion>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Docs;
