import React, { useState } from 'react'
import './header.css'
import Mobile from './mobile'
import Web from './web'

function Header() {
  const [Isopen, setIsopen] = useState(false)
  return (
    <div className='header'>
      <div className='logo'>MayankKhali</div>
      <div className='menu'>
        <div className='web-menu'>
          <Web />
        </div>
        <div className='mobile-menu'>
          <div onClick={() => setIsopen(!Isopen)}>
            <i className='fi-rr-apps menu-icon'></i>
          </div>
          {Isopen && <Mobile Isopen={Isopen} setIsopen={setIsopen} />}
        </div>
      </div>
    </div>
  )
}

export default Header
