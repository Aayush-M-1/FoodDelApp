import React from 'react'
import './Header.css'

const Header = () => {

  return (
    <div className='header'>
      <div className="header-content">
        <p>Welcome to DELicios, where every bite tells a story! Explore our diverse menu, crafted with the freshest ingredients and infused with passion. Whether you're dining in or ordering online, experience the perfect blend of flavor, quality, and hospitality. Discover your new favorite dish at DELicios today!</p>
        <button onClick={()=>location.href='#explore-menu'}>View Menu</button>
      </div>
    </div>
  )
}

export default Header