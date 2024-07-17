import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <a href='#navbar'><p className="logo">DELicios</p></a>
            <p>Welcome to DELicios, where every bite tells a story! Explore our diverse menu, crafted with the freshest ingredients and infused with passion. Whether you're dining in or ordering online, experience the perfect blend of flavor, quality, and hospitality. Discover your new favorite dish at DELicios today!</p>
            <div className="footer-social-icons">
                <a href='https://www.linkedin.com/in/aayush-mahobia-330076224/' target='_blank'><img src={assets.linkedin_icon} alt="" /></a>
                <p>Aayush Mahobia</p>
            </div>
        </div>
    </div>
  )
}

export default Footer