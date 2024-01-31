import './SignUp.css';
import React, { useState } from 'react';

export default function SignUp(){

  const [createUsername, setCreateUsername] = useState('');
  const [createPassword, setCreatePassword] = useState('');
  const history = useHistory();

  function handleSubmit(e){
    e.preventDefault()
    history.push('/explore');
    
  }

    
    return (
        <>
        <h1 className='muse'>Muse</h1>
        <h2 className='tag'>Frame Your Vision: <br/>Inspiration Awaits</h2>
        <form onSubmit={handleSubmit} className="form">
          <h3 className='lets'>Lets get started!</h3>
          <label htmlFor="username">Create Username</label><br/>
          <input input value={createUsername} onChange={(e) => setCreateUsername(e.target.value)} name="username"/><br/>
          <label htmlFor="password">Create Password</label><br/>
          <input type="password" value={createPassword} onChange={(e) => setCreatePassword(e.target.value)} name="password" />
          <button className="sub-btn">Submit</button>
        </form>
        </>
      )
    }