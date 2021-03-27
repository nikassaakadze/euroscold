import React from 'react'
import { Marker, Popup } from "react-mapbox-gl";
import ReactMapboxGl from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import '../styles/map.css'

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiYm9tdGFrYXRhIiwiYSI6ImNrNmt6ZmJvMzA4ejAzcnA2Y2N6aGdkdGgifQ.5itrZsf_kX9Rnw4kSep5ZQ",
});

function Location() {
  const [location, setLocation] = React.useState([ 44.81899969809592, 41.79520125837318 ]);
  return (
    <div>
      <Map
        style="mapbox://styles/mapbox/satellite-v9"
        containerStyle={{
          height: "600px",
          width: "100%",
        }}
        zoom={[15 ]}
        center={location}
        className="map"
      >
          <Marker coordinates={[ 44.81899969809592, 41.79520125837318 ]} anchor="bottom" >
          <svg width="50" height="50" viewBox="0 0 434 512" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M370.126 63.424C329.227 22.524 274.84 0 216.995 0C159.16 0 104.773 22.524 63.874 63.424C22.975 104.324 0.450012 158.71 0.450012 216.555C0.450012 333.565 111.092 430.891 170.527 483.177C178.785 490.435 185.923 496.714 191.602 502.022C198.72 508.67 207.858 511.999 216.996 511.999C226.134 511.999 235.271 508.67 242.4 502.022C248.079 496.713 255.217 490.435 263.475 483.177C322.91 430.89 433.552 333.565 433.552 216.555C433.55 158.71 411.026 104.324 370.126 63.424ZM216.995 303.803C164.378 303.803 121.569 260.994 121.569 208.367C121.569 155.75 164.378 112.941 216.995 112.941C269.622 112.941 312.431 155.75 312.431 208.367C312.431 260.994 269.622 303.803 216.995 303.803Z" fill="#FF7C48"/>
          <path d="M433.55 216.555C433.55 333.565 322.908 430.891 263.473 483.177C255.215 490.435 248.077 496.714 242.398 502.022C235.27 508.67 226.132 511.999 216.994 511.999V303.803C269.621 303.803 312.43 260.994 312.43 208.367C312.43 155.75 269.621 112.941 216.994 112.941V0C274.839 0 329.226 22.524 370.125 63.424C411.024 104.324 433.55 158.71 433.55 216.555Z" fill="#FF4C04"/>
          </svg>
        </Marker>
      </Map>
    </div>
  )
}

export default Location
