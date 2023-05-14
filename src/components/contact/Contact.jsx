import React from 'react'
import './Contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {CiLinkedin} from 'react-icons/ci'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_r13e8ck', 'template_ljz7seh', form.current, 'rWQEZWU4GIUn-_Z8l')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>tajoacha@gmail.com</h5>
            <a href="mailto: tajoacha@gmail.com">Send a message</a>
          </article>

          <article className='contact__option'>
            <CiLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Atabs01</h5>
            <a href="https://www.linkedin.com/in/atabong-tajo-acha-bb1399247/" target='_blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+905526474074</h5>
            <a href="https://web.whatsapp.com//send?phone+905526474074" target='_blank'>Send a message</a>{/*"https://web.whatsapp.com//send?phone+905526474074" */}  {/*"https://api.whatsapp.com/send?phone+905526474074" */}
          </article>
        </div>
        {/*End of Contact*/}
        <form ref={form} onSubmit={sendEmail}>                                                                {/*emailjs.com ---> react emailjs ---> npm install emailjs-com--save */}
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact