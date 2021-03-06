import React from 'react'
import './mobil.css'
function Mobile({ Isopen, setIsopen }) {
  return (
    <div className='mobile'>
      <div className='close-icon' onClick={() => setIsopen(!Isopen)}>
        <i className='fi-rr-cross-circle'></i>
      </div>
      <div className='mobile-options'>
        <div className='mobile-option'>
          <a href='#project'>
            <i className='fi-rr-edit-alt option-icon'></i>Projects
          </a>
        </div>
        <div className='mobile-option'>
          <a href='#skills'>
            <i className='fi-rr-laptop option-icon'></i>Skills
          </a>
        </div>
        <div className='mobile-option'>
          <a href='#work'>
            <i className='fi-rr-briefcase option-icon'></i>Work
          </a>
        </div>
        <div className='mobile-option'>
          <a href='#contact'>
            <i className='fi-rr-link option-icon'></i>Contacts
          </a>
        </div>
      </div>
    </div>
  )
}

export default Mobile
