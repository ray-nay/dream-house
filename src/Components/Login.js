import React, {useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext'
function Login({onLogin}) {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErrors] = useState([]);

  const {login } = useContext(AuthContext)
    
    const handleSubmit = (e)=>{
        // send Data to rails
        e.preventDefault()
        login(username, password)
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
          onChange={(e) => setUsername(e.target.value)}
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
      <div>
        {error.map((er) => (
          <h2 key={er}>{er}!</h2>
        ))}
      </div>
    </div>
  );
}

export default Login