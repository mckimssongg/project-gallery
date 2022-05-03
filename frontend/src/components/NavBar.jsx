import React from "react";
import { Link } from "react-router-dom";

function Navbar () {
    const deletSesion = () => {
        localStorage.removeItem('dataSesion');
        window.location.reload()
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Gallery</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor01">
              <ul className="navbar-nav me-auto">
                <li className="nav-item d-flex align-items-baseline">
                  <ion-icon name="home-sharp" />
                  <Link className="nav-link active m-1 " to="/">Home
                    <span className="visually-hidden">(current)</span>
                  </Link>
                </li>
                <li className="nav-item d-flex align-items-baseline">
                  <ion-icon name="camera-sharp"/>
                  <Link className="nav-link m-1" to="/Photos">Photos</Link>
                </li>
                <li className="nav-item d-flex align-items-baseline">
                <ion-icon name="videocam-sharp"/>
                  <Link className="nav-link m-1" to="/Videos">Videos</Link>
                </li>
                <li className="nav-item  d-flex align-items-baseline">
                <ion-icon name="log-in-sharp"/>
                  <Link className="nav-link m-1" to="/Login" onClick={deletSesion}>Logout</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    )
}

export default Navbar;