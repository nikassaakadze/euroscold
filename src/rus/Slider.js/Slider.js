import React from 'react'
import Carousel from 'react-material-ui-carousel'
import {Paper, Slide} from '@material-ui/core'
import '../../styles/slider.css'

function Slider() {
  return (
    <div className="site__slider">
      <Carousel autoPlay={true} indicators={false} NavButtonsAlwaysVisible={true} animation="slide">
      <Paper className="slider__paper">
        <img className="slider__hero" src="http://ariada.ru/uploads/thumbs/slider/1920x1080_cropped_2038c626494fee0a140ed81f53dff4b0.jpg" alt="" />
        <div className="slider__description">
        </div>
      </Paper>
      <Paper className="slider__paper">
        <img className="slider__hero" src="http://ariada.ru/uploads/thumbs/slider/1920x1080_cropped_760b67e884547caa1aa04a2360294404.jpg" alt="" />
        <div className="slider__description">
        </div>
      </Paper>
      <Paper className="slider__paper">
        <img className="slider__hero" src="http://ariada.ru/uploads/thumbs/slider/1920x1080_cropped_9c09cfd17f5f1e27eaeacdaf69bb292f.jpg" alt="" />
        <div className="slider__description">
        </div>
      </Paper>
      <Paper className="slider__paper">
        <img className="slider__hero" src="http://ariada.ru/uploads/thumbs/slider/1920x1080_cropped_fd347452efca404fa9307519df0ff435.jpg" alt="" />
        <div className="slider__description">
        </div>
      </Paper>
      <Paper className="slider__paper">
        <img className="slider__hero" src="http://ariada.ru/uploads/thumbs/slider/1920x1080_cropped_8b44ff7eeed064440380149dc0f8460a.jpg" alt="" />
        <div className="slider__description">
        </div>
      </Paper>
      </Carousel>
    </div>
  )
}

export default Slider