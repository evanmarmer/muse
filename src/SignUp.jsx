import './SignUp.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function Login() {
  
  let [isLoggedIn, setIsLoggedIn] = useState(false)
  let [username, setUsername] = useState('')

  useEffect(() => {
    if (localStorage.getItem('isLoggedIn') === 'true' && localStorage.getItem('username')) {
      setIsLoggedIn(true)
    }
  }, [])
  
  const handleLogin = (e) => {
    e.preventDefault()

    const body = {username}
    console.log(username)

    axios.post('/signUp', body)
    .then((response) => {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('username', username);
      window.location.href = '/explore'
    })
  };

  function user(e){
    setUsername(e.target.value)
  }
  
  return (
    <>
      <h1 className='muse'>Muse</h1>
      <h2 className='tag'>Frame Your Vision: <br/>Inspiration Awaits</h2>
      <form onSubmit={handleLogin} className="form">
        <h3 className='lets'>Lets Get Started!</h3>
        <label className="label" htmlFor="username">Username</label><br/>
        <input className='input3' onChange={user} value={username} name="username" /><br/>
        <label className="label" htmlFor="password">Password</label><br/>
        <input className='input3' name="password" type="password"/>
        <button type="submit" className="sub-btn">Submit</button>
      </form>
    </>
  );
}
