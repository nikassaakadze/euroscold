import React from 'react'
import logo from "../../assets/logo/logo.svg"
import '../../styles/header.css'
import {Link, useHistory} from 'react-router-dom'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

function Header() {
  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
 };
  return (
    <header className="header__wrapper">
      <div className="header__inner">
      <nav className="header__left">
      <ul>
        <li onClick={scrollTop}><Link to="/en/home"><span>Home</span></Link></li>
        <li><Link><span>About</span></Link></li>
        <li><Link to="/en/home/allnews"><span>News</span></Link></li>
        <li><Link to="/en/home/allproducts"><span>Products</span></Link></li>
        <li><Link onClick={scrollTop} to="/en/home/contact"><span>Contact</span></Link></li>
      </ul>
      </nav>
      <div className="header__right">
        <div className="header__infolist">
          <div className="infoItem">
            <PhoneIphoneIcon />
            <span>( +995 ) 555 44 33 22</span>
          </div>
          <div className="infoItem">
            <MailOutlineIcon />
            <span>contact@euros.ge</span>
          </div>
          <div className="infoItem">
            <LocationOnIcon />
            <span>Khizanishvili #27</span>
          </div>
        </div>
      </div>
      </div>
    </header>
  )
}

export default Header
