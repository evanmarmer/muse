import './Home.css';
import { Link, Outlet } from 'react-router-dom'

export default function Home(){
    
    return (
        <>
        <h1 className='muse'>Muse</h1>
        <h2 className='tag'>Inspiration for your next shoot</h2>
        <li>
          <Link className="SUU" to="/signup">SignUp</Link>
        </li>
        <img className="main-img" src="https://i.pinimg.com/originals/3a/bf/ac/3abfacf994ae2eb9e4b92d7c174f7713.jpg" />
        <div className="glass">
            <p className="info">Muse lets you see other photogrophers images to help you get 
            inspired for your next trip in the field </p>
        </div>

        </>
      )
    }