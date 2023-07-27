import { useEffect } from "react";
import Footer from "./Footer";
import Menu from "./Menu";
import { useTranslation } from "react-i18next";
import envracBanner from "../images/banner.jpeg";

const Accueil = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.body.classList.remove("background");
  }, []);
  return (
    <>
      <Menu />
      <div className='w-50 left justify-center h-40'>
        <img
          src={envracBanner}
          alt='envrac banner'
          className='w-80 p-t-2_5p'
          style={{ opacity: 0.2 }}
        />
      </div>
      <article className='banner-article right w-50'>
        <p>{t("accueil_1_2")}</p>
        <p>{t("accueil_2_2")}</p>
        <p>{t("accueil_3_2")}</p>
        <p>{t("accueil_4_2")}</p>
        <p>{t("accueil_5_2")}</p>
      </article>
      <Footer />
    </>
  );
};

export default Accueil;
