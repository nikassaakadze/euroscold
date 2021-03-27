import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Topbar from '../topbar/Topbar'
import {Input, Button, message } from 'antd';
import emailjs from 'emailjs-com'
import 'antd/dist/antd.css';
import '../../styles/contact.css'
import logo from '../../assets/logo/logo.svg'

const { TextArea } = Input;

function Contact() {

  const success = () => {
    message.success({
      content: 'Сообщение отправлено',
      className: 'custom-class',
      style: {
        marginTop: '20vh',
      },
    });
    
  };

  const sendMessageToMail = (event) => {
    event.preventDefault()

    emailjs.sendForm('euros_template', 'euros_template', event.target, 'user_WjyOkzglnJEceIpZue37l')
      .then((result) => {
        event.target.reset()
      }, (error) => {
          console.log(error.text);
      });
      success()
      
  }

  return (
    <div className="contact__wrapper">
      <Topbar />
      <Header />
     <div className="contact__inner">
        <div className="contact__form">
        <img className="contact__logo" src={logo} alt="logo" />
        <form
          className="contact__inputs"
          onSubmit={sendMessageToMail}
    >
      <div className="form__line">
        <Input style={{marginRight: "20px"}} size="large" className="formInputField" placeholder="Имя" name="name" required />
        <Input style={{marginLeft: "20px"}} placeholder="Почта" size="large" className="formInputField" name="email" required />
      </div>
        <div className="message">
        <TextArea style={{marginTop: "40px"}} placeholder="Сообщение" rows={14} name="message" required />
        </div>
        <Button className="sendBtn" type="primary" htmlType="submit"> Отправить </Button>
    </form>
    {/* <form onSubmit={sendMessageToMail}>
    <input name="name"/>
    <input name="email"/>
    <input name="message"/>
      <button type="submit">Send</button>
    </form> */}
        </div>
     </div>
     <Footer />
    </div>
  )
}

export default Contact
