import './SignUp.css';
import React, { useState, useEffect } from 'react';


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
      <form onSubmit={handleLogin} className="form">
        <h3 className='lets'>Lets Get Started!</h3>
        <label htmlFor="username">Username</label><br/>
        <input onChange={user} value={username} name="username" /><br/>
        <label htmlFor="password">Password</label><br/>
        <input name="password" type="password"/>
        <button type="submit" className="sub-btn">Submit</button>
      </form>
    </>
  );
}
// export default function SignUp(){

//   const [createUsername, setCreateUsername] = useState('');
//   const [createPassword, setCreatePassword] = useState('');
//   const history = useHistory();

//   function handleSubmit(e){
//     e.preventDefault()
//     history.push('/explore');
//   }

    
//     return (
//         <>
//         <h1 className='muse'>Muse</h1>
//         <h2 className='tag'>Frame Your Vision: <br/>Inspiration Awaits</h2>
//         <form onSubmit={handleSubmit} className="form">
//           <h3 className='lets'>Lets get started!</h3>
//           <label htmlFor="username">Create Username</label><br/>
//           <input input value={createUsername} onChange={(e) => setCreateUsername(e.target.value)} name="username"/><br/>
//           <label htmlFor="password">Create Password</label><br/>
//           <input type="password" value={createPassword} onChange={(e) => setCreatePassword(e.target.value)} name="password" />
//           <button className="sub-btn">Submit</button>
//         </form>
//         </>
//       )
//     }