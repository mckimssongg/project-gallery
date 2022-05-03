import React from 'react'

function Contac() {
  return (
    <div className="px-5 py-5 mb-5  bgCustom d-flex flex-wrap justify-content-around">
      <div>
        <p className="display-6 fw-bold text-white">Stay in the loop.</p>
        <p className="display-6 fw-bold text-white">Sign up for the updates.</p>
      </div>
      <div className='d-flex flex-wrap justify-content-around'>
        <input
          type="text"
          className="form-control"
          placeholder="correo@gmail.com"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button className="btn btn-primary " type="button" >Sing Up</button>
      </div>
    </div>
  )
}

export default Contac