import React from 'react'

import { useNavigate } from 'react-router-dom'


function Video() {
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
    <div >Video</div>
  )
}

export default Video