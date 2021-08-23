import React from 'react'
import Seprator from '../../common/seprator'
import SocialContact from '../../common/social-contacts'
import './contact.css'

function Contact() {
  return (
    <div className='contact'>
      <Seprator />
      <label className='section-title'>Contact</label>
      <div className='contact-container'>
        <div className='contact-left'>
          <p>Want to get in touch</p>
          <SocialContact />
        </div>
        <div className='download'>
          <a download href={require('../../../assets/Resume.pdf').default}>
            {' '}
            <i className='fi-rr-cloud-download download-icon'></i>Download
            Resume
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
