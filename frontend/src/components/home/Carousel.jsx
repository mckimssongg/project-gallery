import React, { useState } from 'react'
import Carousel from 'react-elastic-carousel';
import Item from "./item";
import Loader from '../Loader'

const breakPoints = [
    { width: 1, itemsToShow: 1 }
  ];

function PicsCarousel() {
  const [data, setData] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [error, setError] = React.useState(false)

  const fetchDATA = async () => {
    await fetch(
      'https://api.pexels.com/v1/curated?page=2&per_page=2',
      { 
        method: 'GET',
        headers: {
          "Authorization": "563492ad6f91700001000001d686fb7780164a7d833047a277988b39"
        }
      }
      )
      .then(response => response.json())
      .then(json => setData(json.photos))
  }
  React.useEffect(() => {
    if(fetchDATA()){
      setIsLoading(false)
    }
  }, [])
  if (isLoading) {
    return (
      <div className="App d-flex justify-content-center">
        <hr className="seperator" />
          <Loader />
      </div>
      );
  }else{
    return (
      <div className="App">
        <hr className="seperator" />
        <div className="carousel-wrapper">
          <Carousel breakPoints={breakPoints} showArrows={false}>
            {data.map((item) => (
              <Item key={item.id}>
                <img src={item.src.portrait} alt={item.photographer} />
              </Item>
             ))}
          </Carousel>
        </div>
      </div>
    );
  }
}

export default PicsCarousel