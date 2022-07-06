import React from 'react';
import './Menu.css';

function Menu({ onClicked, slide }) {
  return (
    
    // Menu Overlay
    <div className={`overlay overlay-slide-${slide}`}>
      {/* Menu Items */} 
      <nav>
        <ul onClick={onClicked}>
          <li id="nav-1" className={`slide-${slide}-1`}><a href="#home">Home</a></li>
          <li id="nav-2" className={`slide-${slide}-2`}><a href="#about">About</a></li>
          <li id="nav-3" className={`slide-${slide}-3`}><a href="#skills">Skills</a></li>
          <li id="nav-4" className={`slide-${slide}-4`}><a href="#projects">Projects</a></li>
          <li id="nav-5" className={`slide-${slide}-5`}><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Menu;