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
            <h4>Email</h4>
            <h5>shelley.timmins@hotmail.co.uk</h5>
            <a href="mailto:shelley.timmins@hotmail.co.uk" target='_blank' className='btn'>Send an email</a>
          </div>
          <div className="contact__option">
            <AiFillPhone className='contact__option-icon'/>
            <h4>Phone</h4>
            <h5>0492 479 517</h5>
            <a href="tel:0492479517" target='_blank' className='btn'>Call me</a>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your full name' required/>
          <input type='text' name='email' placeholder='Your email' required/>
          <textarea name="message" rows="6" placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
