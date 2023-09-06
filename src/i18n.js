import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

// Importez vos traductions ici
import translationEN from "./locales/en.json";
import translationFR from "./locales/fr.json";

// Configurer i18next
const options = {
    order: ["navigator"],
};

i18n.use(initReactI18next)
    .use(HttpApi)
    .use(LanguageDetector) // Registering the detection plugin
    .init({
        resources: {
            en: {
                translation: translationEN,
            },
            fr: {
                translation: translationFR,
            },
        },
        debug: true,
        detection: options,
    });

export default i18n;
