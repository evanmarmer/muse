import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
// import Tracker from './Tracker.jsx'
// import Home from './Home.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path="/" element={<App />} >
      <Route index element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/gallery" element={<Gallery/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/explore" element={<Explore/>} />
      <Route path="/favorites" element={<Favorites/>} />
    </Route>
  ),
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
