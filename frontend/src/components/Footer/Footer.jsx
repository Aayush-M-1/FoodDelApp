import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <a href='#navbar'><p className="logo">DELicios</p></a>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae nesciunt facilis mollitia temporibus aliquid illum voluptates repudiandae nemo ipsum quibusdam exercitationem, eius iste necessitatibus voluptas autem rem est ea aperiam.</p>
            <div className="footer-social-icons">
                <a href='https://www.linkedin.com/in/aayush-mahobia-330076224/' target='_blank'><img src={assets.linkedin_icon} alt="" /></a>
                <p>Aayush Mahobia</p>
            </div>
        </div>
    </div>
  )
}

export default Footer