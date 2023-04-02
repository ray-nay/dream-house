import React, {useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext'
function Login({onLogin}) {
  
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  

  const {login } = useContext(AuthContext)
    
    const handleSubmit = (e)=>{
        // send Data to rails
        e.preventDefault()
        login(name, password)
    }

  return (
    <div className="login">
      <form className="forms" onSubmit={handleSubmit}>
        <h2 id="user">User Login</h2>
        <label>Username</label>
        <input
          type="text"
          className="inputs"
          placeholder="username"
          onChange={(e) => setName(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          className="inputs"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button className="btn-sec" type="submit">
          Login
        </button>
      </form>
      
    </div>
  );
}

export default Login