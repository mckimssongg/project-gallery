import React from 'react'
import imgPrueba from '../../assets/imgprueba.jpg'
import PicsCarousel from './Carousel'

function Presentation() {
  return (
    <div className="px-4 py-2 mb-5 text-center">
      <h1 className="display-5 fw-bold ">Exclusive Photographs</h1>
      {/* <img src={imgPrueba} className="img-fluid" alt="presentation"/> */}
      <PicsCarousel className="img-fluid" alt="presentation"/>
    </div>
  )

}

export default Presentation