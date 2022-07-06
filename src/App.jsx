import React, { useState } from 'react';
import Menu from './components/Menu';
import MenuBar from './components/MenuBar';
import Sections from './components/Sections';
import './App.css';

function App() {

  const [slide, setSlide] = useState('out')

  function handleClick() {
    setSlide((preValue) => {
      if (preValue === 'out') {
        return 'in';
      } 
      return 'out';
    });
  }

  console.log(slide);

  return (
    <div>
      <Menu slide={slide} onClicked={handleClick}/>
      <MenuBar slide={slide} onClicked={handleClick} />
      <Sections />
    </div>
  );
}

export default App;
