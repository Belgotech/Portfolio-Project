import {useState} from 'react';
import './Nav.css';
import {FaHome} from 'react-icons/fa'
import {SiAboutdotme} from 'react-icons/si'
import {BsBookmarkCheckFill} from 'react-icons/bs'
import {MdDesignServices} from 'react-icons/md'
import {RiContactsBookFill} from 'react-icons/ri'

const Nav = () => {
const [activeNav, setActiveNav] = useState('#')


    return (
        <nav id='Nav'>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#'? 'active' : ''}> <FaHome /> </a>
            <a href="#About" onClick={() => setActiveNav('About')} className={activeNav === 'About'? 'active' : ''}> <SiAboutdotme /> </a>
            <a href="#Experience" onClick={() => setActiveNav('Experience')} className={activeNav === 'Experience'? 'active' : ''}><BsBookmarkCheckFill /></a>
            <a href="#Service" onClick={() => setActiveNav('Service')} className={activeNav === 'Service'? 'active' : ''}><MdDesignServices /></a>
            <a href="#Contact" onClick={() => setActiveNav('Contact')} className={activeNav === 'Contact'? 'active' : ''}><RiContactsBookFill /></a>
        </nav>
    )
}

export default Nav
