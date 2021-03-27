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
        <li onClick={scrollTop}><Link to="/rus/home"><span>Главная страница</span></Link></li>
        <li><Link><span>о нас</span></Link></li>
        <li><Link to="/rus/home/allnews"><span>Новости</span></Link></li>
        <li><Link to="/rus/home/allproducts"><span>товары</span></Link></li>
        <li><Link onClick={scrollTop} to="/rus/home/contact"><span>контакт</span></Link></li>
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
            <span>Хизанишвили #27</span>
          </div>
        </div>
      </div>
      </div>
    </header>
  )
}

export default Header
