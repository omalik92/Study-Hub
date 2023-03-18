import React from 'react'
import './contact.css';

const Contact = () => {
  return (
    <section className="contact section" id='contact'>
      <h2 className="section_title">Contact Support</h2>
      <span className="section_subtitle">Reach out if you have any questions</span>

      <div className="contact_container container grid">
        <div className="contact_content">
          <h3 className="contact_title">Get in touch</h3>

          <div className="contact_info">
            <div className="contact_card">
              <i className="uil uil-envelopes contact_card-icon"></i>

              <h3 className="contact_card-title"
              ></h3>
              <span className="contact_card-data">user@gmail.com</span>
            
            <a href="/" 
            className="contact_button">Email Us 
            <i className="bx bx-right-arrow-alt contact_button-icon"></i>
            </a>
            </div>

            <div className="contact_card">
              <i className="uil uil-phone contact_card-icon"></i>

              <h3 className="contact_card-title"
              ></h3>
              <span className="contact_card-data">+44777-555</span>
            
            <a href="/" 
            className="contact_button">
            Call Us
            </a>
            </div>

            <div className="contact_card">
              <i className="uil uil-whatsapp contact_card-icon"></i>

              <h3 className="contact_card-title"
              ></h3>
              <span className="contact_card-data">+44 555-55-55</span>
            
            <a href="/" 
            className="contact_button"
            >Message Us
            </a>
            </div>

          </div>
        </div>

        <div className="contact_content">
          <h3 className="contact_title">Send us a message</h3>

          <form className="contact_form">
          <div className="contact_form-div">
            <label  className="contact_form-tag">Name</label>
            <input 
            type="text" 
            name="name"
            className='contact_form-input' 
            placeholder='Enter your Name' />
          </div>
          
          <div className="contact_form-div">
            <label  className="contact_form-tag">Email</label>
            <input 
            type="email" 
            name="email"
            className='contact_form-input' 
            placeholder='Enter your Email' />
          </div>

          <div className="contact_form-div contact_form-area">
            <label  className="contact_form-tag">Message</label>
            <textarea 
            name="project" 
            cols="30"
             rows="10"
            className='contact_form-input' 
            placeholder='Message'>

            </textarea>
          </div>

          <button className='button button--flex'> Send Message&nbsp;&nbsp; 
            <i className="uil uil-location-arrow"></i>
          </button>


          </form>
        
        </div>
      </div>
    </section>
  )
}

export default Contact