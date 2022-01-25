import React from 'react'
// import logo from './logo.svg'   find logo for myself
import { links } from '../data'

export default function Navbar() {
  const handleClick = (e) => {
    e.preventDefault()
    const target = e.target.getAttribute('href')
    const location = document.querySelector(target).offsetTop

    window.scrollTo({
      left: 0,
      top: location - 64,
    })
  }
  return (
    <nav className='navbar sticky'>
      <div className='nav-center'>
        {/* <img src={logo} alt='smooth scroll' /> */}
        <div>
          {links.map((link) => {
            return (
              <a href={link.url} key={link.id} onClick={handleClick}>
                {link.text}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  );
}
