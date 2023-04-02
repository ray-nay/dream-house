import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
function SignInPage() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordconfirmation, setPasswordConfirmation] = useState("");
 

  const {signup} = useContext(AuthContext)

  function handleSubmit(e) {
    e.preventDefault();
    signup(name, password, passwordconfirmation)
  }

  return (
    <div>
      <form className="forms" onSubmit={handleSubmit}>
        <h3 id="user">User Registration</h3>
        <label>Username</label>
        <input
          type="text"
          className="inputs"
          placeholder="Username"
          name="username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          className="inputs"
          placeholder="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          className="inputs"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Confirm Password</label>
        <input
          type="password"
          className="inputs"
          placeholder="Confirm Password"
          name="confirm_password"
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <br />
        <br />
        <button type="submit"className='btn-sec'>
          Sign Up
        </button>
      </form>
      
    </div>
  );
}

export default SignInPage