import React, {useState} from 'react'
import logo from "../../assets/logo/logo.svg"
import '../../styles/header.css'
import {Link, useHistory} from 'react-router-dom'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import MenuIcon from '@material-ui/icons/Menu';
import { Drawer } from 'antd';

function Header() {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
 };
  return (
    <header className="header__wrapper">
          <Drawer
        title="ნავიგაცია"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
      <nav className="responsive__avlist">
      <ul>
        <li onClick={scrollTop}><Link to="/"><span>მთავარი</span></Link></li>
        <li><Link><span>შესახებ</span></Link></li>
        <li><Link to="/allnews"><span>სიახლეები</span></Link></li>
        <li><Link to="/allproducts"><span>პროდუქცია</span></Link></li>
        <li><Link onClick={scrollTop} to="/contact"><span>კონტაქტი</span></Link></li>
      </ul>
      </nav>
      </Drawer>
      <div className="header__inner">
      <div onClick={showDrawer} className="header__burger">
        <MenuIcon />
      </div>
      <nav className="header__left">
      <ul>
        <li onClick={scrollTop}><Link to="/"><span>მთავარი</span></Link></li>
        <li><Link><span>შესახებ</span></Link></li>
        <li><Link to="/allnews"><span>სიახლეები</span></Link></li>
        <li><Link to="/allproducts"><span>პროდუქცია</span></Link></li>
        <li><Link onClick={scrollTop} to="/contact"><span>კონტაქტი</span></Link></li>
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
            <span>ხიზანიშვილის #27</span>
          </div>
        </div>
      </div>
      </div>
    </header>
  )
}

export default Header
