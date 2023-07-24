import { View } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

const Footer = () => {
    return (
        <View id='footer-wrap'>
            {/* TODO Barre d'annonce tournante */}
            <div className='a123456789'><div className='ad-text'>Sit do sunt enim anim officia aute magna tempor. Sit quis veniam enim commodo fugiat. Laboris labore qui mollit laborum sunt culpa dolore pariatur fugiat occaecat voluptate et reprehenderit consequat. Incididunt ex adipisicing consequat ullamco reprehenderit id amet nisi est est esse ea. Laboris sunt officia in aliqua deserunt reprehenderit elit duis do do enim excepteur excepteur exercitation. Officia occaecat incididunt aliqua et ipsum ex et consequat aliquip quis aliqua ea ut minim.</div></div>
            <footer>
                <p>EnVRAC Copyright 2023</p>
                <p><a href='/cookiepolicy'>Cookie Policy</a>-<a href='/legalterms'>Legal Terms</a>-<a href='/privacypolicy'>Privacy Policy</a></p>
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
                <p>dev by Sherokhi</p>
            </footer>
        </View>
    )
}

export default Footer