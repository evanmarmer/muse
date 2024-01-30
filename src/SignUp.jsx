import './SignUp.css';



export default function SignUp(){
    
    return (
        <>
        <head>
          <script defer src="https://cdn.userfront.com/@userfront/toolkit@latest/dist/web-component.umd.js"></script>
        </head>
         <h1 className='muse'>Muse</h1>
        <h2 className='tag'>Inspiration for your next shoot</h2>
        <form className="form">
          <label htmlFor="username">Create Username</label><br/>
          <input name="username" /><br/>
          <label htmlFor="password">Create Password</label><br/>
          <input name="password" />
          <button className="sub-btn">Submit</button>
        </form>
        </>
      )
    }