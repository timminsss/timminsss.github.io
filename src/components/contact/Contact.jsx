import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.css'
import { IoMdMail } from 'react-icons/io'
import { AiFillPhone } from 'react-icons/ai'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_jkf9yy8', 'template_tulhg8b', form.current, 'iWLtdRj0ZsNvGg3Cb')
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <div className="contact__option">
            <IoMdMail className='contact__option-icon'/>
            <h3>Email</h3>
            <h4>shelley.timmins2@gmail.com</h4>
            <a href="mailto:shelley.timmins2@gmail.com" target='_blank' className='btn'>Send an email</a>
          </div>
          <div className="contact__option">
            <AiFillPhone className='contact__option-icon'/>
            <h3>Phone</h3>
            <h4>0492 479 517</h4>
            <a href="tel:0492479517" target='_blank' className='btn'>Call me</a>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Full Name' required/>
          <input type='text' name='email' placeholder='Email' required/>
          <textarea name="message" rows="6" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary submit-btn'>Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
