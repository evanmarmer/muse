import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import Login from './Login.jsx'
import Home from './Home.jsx'
import SignUp from './SignUp.jsx'
import Gallery from './Gallery.jsx'
import About from './About.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import Explore from './Explore.jsx'
import Images from './Images.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path="/" element={<App />} >
      <Route index element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signUp" element={<SignUp/>} />
      <Route path="/gallery" element={<Gallery/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/explore" element={<Explore/>} />
      <Route path="/images" element={<Images/>} />
      
      {/* <Route path="/favorites" element={<Favorites/>} /> */}
    </Route>
  ),
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
