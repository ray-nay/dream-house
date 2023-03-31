import React, { useState } from 'react';

function Login({onLogin}) {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErrors] = useState([]);


  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => {
      console.log(res)
      if (res.ok) {
        res.json().then((user) => {
          onLogin(user);
        });
      } else {
        res.json().then((err) => {
          setErrors(err.errors);
        });
      }
    });
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