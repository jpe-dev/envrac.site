import { useEffect } from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import { useState } from "react";
import Accordion from "../components/Accordion/Accordion";
import { accordionData } from "../components/Accordion/faq";
import { accordionData2 } from "../components/Accordion/faq2";
import { useTranslation } from "react-i18next";

const Docs = () => {
    const { t } = useTranslation();
    const [openAccordion, setOpenAccordion] = useState(null);
    const handleAccordionClick = (index) => {
        if (index !== openAccordion) {
            setOpenAccordion(index);
        } else {
            setOpenAccordion(null);
        }
    };
    useEffect(() => {
        document.body.classList.add("background");
    }, []);

    return (
        <>
            <Menu />
            <div className='content'>
                <h1>{t("menu_docs_2")}</h1>
                <div className='w-100 flex-row'>
                    <div className='w-50'>
                        <Accordion
                            accordionData={accordionData}
                            class={"m-t-0"}
                        ></Accordion>
                    </div>
                    <div className='w-50'>
                        <Accordion
                            accordionData={accordionData2}
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
