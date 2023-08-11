import { View } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useTranslation } from "react-i18next"
import "./footer.css"
const Footer = () => {
    const { t, i18n } = useTranslation();

    const changeLanguageHandler = (lang) => {
        i18n.changeLanguage(lang);
    }
    return (
        <View id='footer-wrap'>
            <footer>
                <p>EnVRAC Copyright 2023</p>
                <p><a href='/cookiepolicy'>{t("policy_cookie")}</a>-<a href='/legalterms'>{t('legal_terms')}</a>-<a href='/privacypolicy'>{t('policy_privacy')}</a></p>
                <p>
                    <a href='insta/envrac'>
                        <FontAwesomeIcon icon={icon({ name: 'instagram', style: 'brands' })} /></a>
                    <a href='tiktok/envrac'>
                        <FontAwesomeIcon icon={icon({ name: 'tiktok', style: 'brands' })} /></a>
                    <a href='youtube/envrac'>
                        <FontAwesomeIcon icon={icon({ name: 'youtube', style: 'brands' })} /></a>
                    <a href='facebook/envrac'>
                        <FontAwesomeIcon icon={icon({ name: 'facebook', style: 'brands' })} /></a>
                    <a href='linkedin/envrac'>
                        <FontAwesomeIcon icon={icon({ name: 'linkedin', style: 'brands' })} /></a>
                </p>
                <p>
                    <span onClick={() => changeLanguageHandler('fr')}>FR</span> |   <span onClick={() => changeLanguageHandler('en')}>EN</span>
                </p>
                <p>dev {t('par')} Sherokhi</p>
            </footer>
        </View>
    )
}

export default Footer