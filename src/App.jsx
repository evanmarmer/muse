import './App.css'
import { Link, Outlet } from 'react-router-dom'
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
              <Link className="SU" to="/signup">SignUp</Link>
            </li>
            <li>
              <Link className="linksL" to="/login">Login</Link>
            </li>
            <li>
              <Link className="links" to="/about">About</Link>
            </li>
            <li>
              <Link className="links" to="/gallery">Gallery</Link>
            </li>
          </>
        )}
        {isLoggedIn &&(
          <>
            <li>
              <Link className="links" to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link className="links" to="/images">Images</Link>
            </li>
            <li>
              <Link className="links" to="/explore">Explore</Link>
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

