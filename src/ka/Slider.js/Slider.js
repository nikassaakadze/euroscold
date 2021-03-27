import React from 'react'
import Carousel from 'react-material-ui-carousel'
import {Paper, Slide} from '@material-ui/core'
import '../../styles/slider.css'

function Slider() {
  return (
    <div className="site__slider">
      <Carousel autoPlay={true} indicators={false} NavButtonsAlwaysVisible={true} animation="slide">
      <Paper className="slider__paper">
        <img className="slider__hero" src="https://firebasestorage.googleapis.com/v0/b/eurostandard-f5bd5.appspot.com/o/products%2Fka%2F1920x1080_cropped_2038c626494fee0a140ed81f53dff4b0.jpg?alt=media&token=40a7d7c0-b83a-4b77-921b-9c05fb00f32b" alt="" />
        <div className="slider__description">
        </div>
      </Paper>
      <Paper className="slider__paper">
        <img className="slider__hero" src="https://firebasestorage.googleapis.com/v0/b/eurostandard-f5bd5.appspot.com/o/products%2Fka%2F1920x1080_cropped_9c09cfd17f5f1e27eaeacdaf69bb292f.jpg?alt=media&token=3c81ac95-c553-4599-aa8f-5417e2a422ed" alt="" />
        <div className="slider__description">
        </div>
      </Paper>
      <Paper className="slider__paper">
        <img className="slider__hero" src="https://firebasestorage.googleapis.com/v0/b/eurostandard-f5bd5.appspot.com/o/products%2Fka%2F1920x1080_cropped_fd347452efca404fa9307519df0ff435.jpg?alt=media&token=05be49a4-420d-44cf-919a-0982ca8e446d" alt="" />
        <div className="slider__description">
        </div>
      </Paper>
      <Paper className="slider__paper">
        <img className="slider__hero" src="https://firebasestorage.googleapis.com/v0/b/eurostandard-f5bd5.appspot.com/o/products%2Fka%2F1920x1080_cropped_8b44ff7eeed064440380149dc0f8460a.jpg?alt=media&token=48a47e9c-66aa-4dcd-a76a-3c77d4f432a9" alt="" />
        <div className="slider__description">
        </div>
      </Paper>
      </Carousel>
    </div>
  )
}

export default Slider