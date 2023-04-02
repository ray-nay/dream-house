
import './App.css';
import Home from './Components/Home';
import React, { useState, useEffect } from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Form from './Components/Form';
import ViewMore from './Components/ViewMore';
import NavBar from './Components/NavBar';
import Login from "./Components/Login";
import SignInPage from "./Components/SignInPage";
import AuthProvider from './context/AuthContext';


function App() {
  
  const [houses, setHouses] = useState([]);
  
  
  
 



  useEffect(() => {
    fetch("http://127.0.0.1:3000/houses")
      .then(res => res.json())
      .then((data) => setHouses(data))
  }, [])

 

  

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
                  <Route path="/login" element={<Login  />} />
                  <Route path="/signup" element={<SignInPage  />} />
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