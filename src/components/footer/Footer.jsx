import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>ANGEL DEVS</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#service">Services</a></li>
        <li><a href="#portoflio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100093480990495"><FaFacebookF /></a>
        <a href="https://www.instagram.com/its_atabs_angel/"><FiInstagram /></a>
        <a href="https://twitter.com/Atabs09"><IoLogoTwitter /></a>
        
      </div>

      <div className="footer__copyright">
        <small>&copy; Angel Devs. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer