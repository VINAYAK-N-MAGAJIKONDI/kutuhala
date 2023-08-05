import React from 'react'
import { Link } from 'react-router-dom';
import kutuhalalogo from "./kutuhala.png"
import './header.css';
export default function Header() {
  return (
    <>
    <header class="header">
      <a class="logo" href=""><img src={kutuhalalogo} alt='kutuhala logo' style={{height:50 , width :50 , display : 'inline-block' ,
       verticalAlign : 'middle' ,
    }} /> kutuhala   </a>
      <input class="menu-btn" type="checkbox" id="menu-btn" />
      <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
      <ul class="menu">
        <li><Link to="/" class="link link-theme link-arrow">HOME</Link></li>
        <li><Link to="/Aboutus" class="link link-theme link-arrow">TEAM</Link></li>
        <li><Link to="/Aboutus" class="link link-theme link-arrow" >ABOUT US</Link></li>
        <li><Link to="/Aboutus" class="link link-theme link-arrow">CONTACT</Link></li>
      </ul>
    </header>
    <script>
      
    </script>

    </>
  )
}
