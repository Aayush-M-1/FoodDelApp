import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
        {/* <img className='logo' src={assets.logo} alt="" /> */}
        <p className='admin-title'>Admin Panel</p>
        <p className='logo'>DELicios</p>
        <img className='profile' src={assets.profile_image} alt="" />
    </div>
  )
}

export default Navbar