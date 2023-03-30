
import './App.css';
import Home from './Components/Home';
import React, { useState, useEffect } from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Form from './Components/Form';
import ViewMore from './Components/ViewMore';
import NavBar from './Components/NavBar';
// import Search from './Components/Search';
import Login from "./Components/Login";
// import SignUp from "./Components/SignUp";
// import HouseList from './Components/HouseList';
function App() {
  
  const [houses, setHouses] = useState([]);
  const [user, setUser] = useState(null);
  
  // const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
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
  // if (!user) return <Login onLogin={setUser} />;
  return (

    
    <BrowserRouter>
      <div className="App">
      <NavBar />
      {/* <Search searchTerm={searchTerm} onSearchChange={setSearchTerm}/> */}
        <Routes>
          <Route path="/" element={<Home houses={houses}/>} />
          <Route path="/form" element={<Form houses={houses} setHouses={setHouses} />}/>
          <Route path="/house/:id" element={<ViewMore />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          {/* <Route path="/signup" element={<SignUp setUser={setUser} />} /> */}
        </Routes>
        
      </div>
    </BrowserRouter>


  );
}

export default App;