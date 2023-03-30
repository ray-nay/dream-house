import './Login.css';

import React, { useState } from "react";

function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }

  return (
    <div onSubmit={handleSubmit} className="box">
      <div className="container">

        <div className="top">
            <span>Have an account?</span>
            <header>Login</header>
        </div>

        <div className="input-field">
            <input type="text" 
              className="input" 
              placeholder="Username" 
              id=""
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            
            />
            <i className='bx bx-user' ></i>
        </div>

        <div className="input-field">
            <input type="Password" 
              className="input" 
              placeholder="Password" 
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i className='bx bx-lock-alt'></i>
        </div>

        <button type="submit">Login</button>
    </div>
    </div>
  );
}


export default Login;