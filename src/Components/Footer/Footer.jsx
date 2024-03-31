import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div>
            <img src={logo} alt="" className='logo' />
            <p>© 2024 FJ PRAXIDIO JUNKSHOP</p>
            <p>All rights reserved</p>
        </div>
        <div>
            <ul>
                <li>Terms of Services</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
    </div>
  )
}
import './Footer.css'

export default Footer
