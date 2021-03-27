import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import '../../styles/partners.css'

function Partners() {
        
  var settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  };
  return (
    <section className="partners__slider">
      <div className="feed__headline partners__headline">
          <div className="feed__name">
          <div className="line"></div>
          <h2>Partners</h2>
            <div className="line"></div>
          </div>
        </div>
          <div className="partners__wrapper">
          <div className="partners__carousell">
        <Slider {...settings}>
          <div className="partner__item">
            <img src="https://firebasestorage.googleapis.com/v0/b/eurostandard-f5bd5.appspot.com/o/128138666_131921015397769_3103764399020630572_n.jpg?alt=media&token=cc04dc77-292f-4db6-8c12-54a2be314e9c" alt="" />
          </div>
          <div className="partner__item">
            <img src="https://firebasestorage.googleapis.com/v0/b/eurostandard-f5bd5.appspot.com/o/1585926938_183647.jpg?alt=media&token=60439409-24a2-4882-af76-dbab911092e6" alt="" />
          </div>
          <div className="partner__item">
            <img src="https://csrclub.ge/crop.php?src=upload/3a4cbebd6b2140016abc9302299053f9.png&w=200&h=200" alt="" />
          </div>
          <div className="partner__item">
            <img src="https://firebasestorage.googleapis.com/v0/b/eurostandard-f5bd5.appspot.com/o/1ec592b8-bd58-4097-941f-a5dd9895ddf9.png?alt=media&token=b6dd0b97-21c5-4b68-a713-9223203dd74f" alt="" />
          </div>
          <div className="partner__item">
            <img src="https://firebasestorage.googleapis.com/v0/b/eurostandard-f5bd5.appspot.com/o/5a7ff827ea501-removebg-preview.png?alt=media&token=6729dd68-6106-45ea-87d7-cf197c81c5ae" alt="" />
          </div> 
          <div className="partner__item">
            <img src="https://firebasestorage.googleapis.com/v0/b/eurostandard-f5bd5.appspot.com/o/spargeo.png?alt=media&token=380273b7-443b-4f79-a1bf-4723420b43e0" alt="" />
      </div>
      </Slider>
    </div>
    </div>
    </section>
  )
}

export default Partners
