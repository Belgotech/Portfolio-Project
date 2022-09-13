import React from 'react'
import './Footer.css'
import { IoLogoTwitter } from 'react-icons/io';
import { BsFacebook } from 'react-icons/bs';

const Footer = () => {
    return (
        <footer id='Footer'className='footer'>
            <h2>BELOVED OBIORA</h2>
            <ul>
                <li><a href="#Home"> Home</a></li>
                <li><a href="#About"> About</a></li>
                <li><a href="#Experience"> Experience</a></li>
                <li><a href="#Service"> Service</a></li>
                <li><a href="#Portfolio"> Portfolio</a></li>
                <li><a href="#Textimonial"> Testimonials</a></li>
                <li><a href="#Contact"> Contact</a></li>
                
            </ul>
            <a href="https//:linkedin.com" ><IoLogoTwitter /></a>
            <a href="https//:linkedin.com" ><BsFacebook /></a>
            <p>BELOVEDOBIORA.All right reserved</p>
        </footer>
    )
}

export default Footer
