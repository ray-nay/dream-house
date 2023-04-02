
import './App.css';
import Home from './Components/Home';
import React, { useState, useEffect } from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Form from './Components/Form';
import ViewMore from './Components/ViewMore';
import NavBar from './Components/NavBar';
// import Search from './Components/Search';
// import Search from './Components/Search';
import Login from "./Components/Login";
import SignInPage from "./Components/SignInPage";
import AuthProvider from './context/AuthContext';

// import HouseList from './Components/HouseList';
function App() {
  
  const [houses, setHouses] = useState([]);
  const [user, setUser] = useState(null);
  
  // const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    // auto-login
    fetch("/login").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);



  useEffect(() => {
    fetch("http://127.0.0.1:3000/houses")
      .then(res => res.json())
      .then((data) => setHouses(data))
  }, [])

  // const displayedHouses = houses.filter((house) => {
  //   return house.name.toLowerCase().includes(searchTerm.toLowerCase())
  // });
  

  // // If user is not logged in, show the login page
  // if (!user) {
  //   return <Login onLogin={setUser} />;
  // }

  // // If user is logged in, show the home page
  useEffect(() => {
    fetch("http://localhost:3000/loggedin").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);
  if (!user) {
    return <SignInPage onLogin={setUser} />;
  }
  

  return (

    
    <BrowserRouter>
        <AuthProvider>
        
              <div className="App">

              <NavBar />
              {/* <Search searchTerm={searchTerm} onSearchChange={setSearchTerm}/> */}
                <Routes>
                  <Route path="/" element={<Home houses={houses}/>} />
                  <Route path="/form" element={<Form houses={houses} setHouses={setHouses} />}/>
                  <Route path="/house/:id" element={<ViewMore />} />
                  <Route path="/login" element={<Login setUser={setUser} />} />
                  <Route path="/signup" element={<SignInPage setUser={setUser} />} />
                </Routes>
                
              </div>
        </AuthProvider>
    </BrowserRouter>

// If user is not logged in, show the login page
  // if (!user) {
  //   return <Login onLogin={setUser} />;
  // }
  );
}

export default App;