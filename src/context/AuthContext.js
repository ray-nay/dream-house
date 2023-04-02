import React from 'react';
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"

export const AuthContext = createContext();

export default function AuthProvider({children}) 
{
    const navigate = useNavigate()
    const [user, setUser] = useState()

    const [change, setOnChange] = useState(false)
    // login
    const login = (name, password) =>{
        fetch("http://127.0.0.1:3000/login",{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, password
            })
        }
        )
        .then(res=>res.json())
        .then(response=>{
            setOnChange(!change)
            if(response.errors)
            {
                 
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: response.errors,
                        footer: '<a href="">Why do I have this issue?</a>'
                    })
            }
            else if(response.loggedin)
            {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'LoggedIn successfully!',
                    showConfirmButton: false,
                    timer: 3000
                  })
                  navigate("/")

            }
            else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: "Something went wrong!",
                })

            }
            
        })
    }

     // signup
    const signup = (name, password, passwordconfirmation) =>{
        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              password,
              password_confirmation: passwordconfirmation,
            }),
          }).then(res=>res.json())
            .then(response=>{
              setOnChange(!change)
              if(response.errors)
              {
                   
                      Swal.fire({
                          icon: 'error',
                          title: 'Oops...',
                          text: response.errors,
                          footer: '<a href="">Why do I have this issue?</a>'
                      })
              }
              else {
                  Swal.fire({
                      position: 'center',
                      icon: 'success',
                      title: 'signedIn successfully!',
                      showConfirmButton: false,
                      timer: 3000
                    })
                    navigate("/Login")
  
              }
              
              
          })
    }

     // Logout
     const logout = () =>{
        fetch("/logout",{
            method: "DELETE"
        })
        .then(response=>{
            // 
            setOnChange(!change)

            setUser()
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'LoggedOut successfully!',
                showConfirmButton: false,
                timer: 3000
              })
              navigate("/login")
        })
    }
   
    // check if user is logged in
    useEffect(()=>{
        fetch("/loggedin",{
            method: "GET",
            headers:{
                "Content-Type": "application/json"
            },
        }
        )
        .then(res=>res.json())
        .then(response=>{
            setUser(response)
        }
        )
    }, [change])

    const contextData = {
        user,
        login, 
        signup, 
        logout
    }

  return (
    <>
     <AuthContext.Provider value={contextData}>
        {children}
     </AuthContext.Provider>
    </>
  )
}