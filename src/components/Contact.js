import React from 'react';
import PizzaLeft from '../assets/pizzaLeft.jpg';
import '../styles/Contact.css';

function Contact() {
  return (
    <div className='contact'>
      <div className='leftSide' style={{backgroundImage:`url(${PizzaLeft})`}}></div>
      <div className='rightSide'>
            <h1>Contact Us</h1>
            <form id='contact-form' method='POST'>
                  <label htmlFor='name'>Full Name</label>
                  <input id='name' name='name' placeholder='Enter full name...' type='text'/>
                  <label htmlFor='email'>Email</label>
                  <input id='email' name='email' placeholder='Enter your email...' type='email'/>
                  <label htmlFor='message'>Message</label>
                  <textarea id='message' name='message' placeholder='Enter your message...' type='text' rows='6' required>Send Message</textarea>
                  <button type='submit'>Send</button>
            </form>
      </div>
    </div>
  )
}

export default Contact
