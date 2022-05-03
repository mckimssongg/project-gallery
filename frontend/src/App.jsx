import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Layout from './layouts/Layout';
import Home from './pages/Home';
import Photo from './pages/Photo';
import Video from './pages/Video';
import ErrorPage from './pages/ErrorPage';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  // const [sesion, setSesion] = React.useState(false);
  
  // React.useEffect(() => {
  //   if (localStorage.getItem('dataSesion')) {
  //     setSesion(true);
  //   }
  //   else{
  //     setSesion(false);
      
  //   }
  // })

  return(
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Photos" element={<Photo />} />
          <Route path="/Videos" element={<Video />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App
