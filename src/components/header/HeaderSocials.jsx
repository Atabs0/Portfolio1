import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsYoutube} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href = "https://www.linkedin.com/in/atabongtajoacha/" target='_blank'><BsLinkedin /></a>
        <a href = "https://github.com/Atabs0" target='_blank'><FaGithub/></a>
        <a href = "https://www.youtube.com/channel/UCqVN-VA46ZMXUuyLjRNr5mg" target='_blank'><BsYoutube/></a>
    </div>
  )
}

export default HeaderSocials