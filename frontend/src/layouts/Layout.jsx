import React from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

function Layout(props) {
  return (
    <React.Fragment>
      <Navbar /> 
      {props.children}
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
