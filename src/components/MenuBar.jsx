import React from 'react';
import './MenuBar.css';

function MenuBar({ onClicked, slide }) {
  return (
    <div className={slide === 'in' ? "change" : "menu-bars"} onClick={onClicked}>
    <div className="bar1"></div>
    <div className="bar2"></div>
    <div className="bar3"></div>
  </div>
  )
}

export default MenuBar;