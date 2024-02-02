import './App.css'
import { Link, Outlet, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react';

function App() {

  let [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('isLoggedIn') === 'true' && localStorage.getItem('username')) {
      setIsLoggedIn(true)
    }
  }, [])

  return (
    <>
      <header>
      <ul className="nav-links">
        {!isLoggedIn &&(
          <>
            <li>
              <NavLink className="SU" to="/signup">SignUp</NavLink>
            </li>
            <li>
              <NavLink className="linksL" to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink className="links" to="/about">About</NavLink>
            </li>
            <li>
              <NavLink className="links" to="/gallery">Gallery</NavLink>
            </li>
          </>
        )}
        {isLoggedIn &&(
          <>
            <li>
              <NavLink className="links" to="/gallery">Gallery</NavLink>
            </li>
            <li>
              <NavLink className="links" to="/images">Images</NavLink>
            </li>
            <li>
              <NavLink className="links" to="/explore">Explore</NavLink>
            </li>
          </>
        )}
      </ul>
      </header>
      <Outlet/>
    </>
  )
}

export default App

