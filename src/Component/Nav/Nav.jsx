import {useState} from 'react';
import './Nav.css';
import {AiOutlineHome} from 'react-icons/ai'
import {SiAboutdotme} from 'react-icons/si'
import {BiBookBookmark} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {GiProgression} from 'react-icons/gi'
import {RiContactsBook2Line} from 'react-icons/ri'

const Nav = () => {
const [activeNav, setActiveNav] = useState('#')


    return (
        <nav id='Nav'>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#'? 'active' : ''}> <AiOutlineHome /> </a>
            <a href="#About" onClick={() => setActiveNav('About')} className={activeNav === 'About'? 'active' : ''}> <SiAboutdotme /> </a>
            <a href="#Experience" onClick={() => setActiveNav('Experience')} className={activeNav === 'Experience'? 'active' : ''}><BiBookBookmark /></a>
            <a href="#Service" onClick={() => setActiveNav('Service')} className={activeNav === 'Service'? 'active' : ''}><RiServiceLine /></a>
            <a href="#Portfolio" onClick={() => setActiveNav('Portfolio')} className={activeNav === 'Portfolio'? 'active' : ''}><GiProgression /></a>
            <a href="#Contact" onClick={() => setActiveNav('Contact')} className={activeNav === 'Contact'? 'active' : ''}><RiContactsBook2Line /></a>
        </nav>
    )
}

export default Nav
