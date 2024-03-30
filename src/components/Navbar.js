import React, { useState, useEffect } from 'react';
// import {Routes,Route} from 'react-router-dom'

import {Link} from 'react-router-dom';
import './Navbar.css';

export default function Navbar({ onRegisterClick }) {
  const [text, setText] = useState('');
  const fullText = "Colosseum 14.0";
  const typingSpeed = 100; // Adjust typing speed (milliseconds)

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length - 1) {
        setText(prevText => prevText + fullText[index]);
        index++;
      } else {
        clearInterval(timer);
      }
    }, typingSpeed);

    return () => clearInterval(timer);
  }, []); // empty dependency array to run effect only once on mount

  return (
    <div>
      <div className='Navbar-Links'>
        <div className='Navbar-logo'>
          Hello world
        </div>
        <Link className='button' to='/'>Login</Link> 
        <a className='button' href="#" onClick={onRegisterClick}>Register</a>
      </div>
      <div className='Navbar-underline'></div>
      <div id='typing-heading' className='Navbar-colosseum'>
        <h1>{text}</h1>
      </div>
    </div>
  );
}

