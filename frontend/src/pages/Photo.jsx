import React from 'react'

import { useNavigate } from 'react-router-dom'

function Photo() {
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
    <div >Photo</div>
  )
}

export default Photo