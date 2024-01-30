import './App.css'
import { Link, Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <header>
      <ul className="nav-links">
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
      </ul>
      </header>
      <Outlet/>
    </>
  )
}

export default App
