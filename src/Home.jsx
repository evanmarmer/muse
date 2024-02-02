import './Home.css';
import { Link, Outlet } from 'react-router-dom'
import {useState, useEffect} from 'react'

export default function Home(){

  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true' ? true : false)

  useEffect(() => {
    if (isLoggedIn) {
      window.location.href = '/explore';
    }
  }, [])
    
    return (
        <>
        { isLoggedIn
          ? <></>
          : <>
            <h1 className='muse'>Muse</h1>
            <h2 className='tag'>Frame Your Vision: <br/>Inspiration Awaits</h2>
            <li>
              <Link className="SUU" to="/signup">SignUp</Link>
            </li>
            <img className="main-img" src="https://i.pinimg.com/originals/3a/bf/ac/3abfacf994ae2eb9e4b92d7c174f7713.jpg" />
            <div className="glass">
                <p className="info">Immerse yourself in Muse, where the rich tapestry of 
                photographers' images unfolds, inviting inspiration for your upcoming field adventure </p>
            </div>
          </>
        }
        </>
      )
    }