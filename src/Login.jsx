import { useState, useEffect } from 'react'

import './Login.css';

export default function Login() {
  
  let [isLoggedIn, setIsLoggedIn] = useState(false)
  let [username, setUsername] = useState('')

  useEffect(() => {
    if (localStorage.getItem('isLoggedIn') === 'true' && localStorage.getItem('username')) {
      setIsLoggedIn(true)
    }
  }, [])
  





  const handleLogin = () => {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('username', username);
    window.open('/explore');
  };

  function user(e){
    setUsername(e.target.value)
  }
  
  return (
    <>
      <h1 className='muse'>Muse</h1>
      <h2 className='tag'>Frame Your Vision: <br/>Inspiration Awaits</h2>
      <form className="form">
        <h3 className='lets'>Welcome Back!</h3>
        <label htmlFor="username">Username</label><br/>
        <input onChange={user} value={username} name="username" /><br/>
        <label htmlFor="password">Password</label><br/>
        <input name="password" />
        <button onClick={handleLogin} type="submit" className="sub-btn">Submit</button>
      </form>
    </>
  );
}
