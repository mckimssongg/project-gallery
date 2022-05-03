import React from 'react'
import { useNavigate } from 'react-router-dom'

// Componenetes
import Hero from '../components/home/Hero'
import Presentation from '../components/home/Presentation'
import PresentationVideo from '../components/home/PresentationVideo'
import Contac from '../components/home/Contac'

//Estilos
import './css/home.css'

function Home() {
  const [sesion, setSesion] = React.useState(false);
  
  const navigate = useNavigate()

  React.useEffect(() => {
    if (localStorage.getItem('dataSesion')) {
      setSesion(true);
    }
    else{
      setSesion(false);
      return navigate('/Login')
    }
  })

  return (
    <React.Fragment>
      <Hero />
      <Presentation/>
      <PresentationVideo />
      <Contac />
    </React.Fragment>
  )
}

export default Home