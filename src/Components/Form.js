

import React, { useState, useRef } from "react";
import Swal from 'sweetalert2';

export default function Form({houses, setHouses}) {
  const formRef=useRef()
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    price: "",
    img:""
  });

  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    setFormData({ ...formData, [name]: value });
  }
  //Function to submit data from the form.
  function handleSubmit(e){
    (e).preventDefault()
    // console.log(formData)
    fetch ('http://localhost:9292/houses', {
        method: "POST", 
        headers: {
            "Content-Type":"application/json",
        },
        body: JSON.stringify(formData)
    })
    .then((res)=> res.json())
    .then((data)=> {
      setHouses([...houses, data])

      //Resetting the input values in the form after submission.
      formRef.current.reset()
     

    
    
    })
    Swal.fire('Your house has been added successfully')
    
    
  }
  return (
    <div className="form">
    <form onSubmit={handleSubmit} className="form-control" ref={formRef}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input 
            onChange={handleChange}
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder="Add house title "
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <textarea
            onChange={handleChange}
            className="form-control"
            id="desc"
            rows="3"
            name="desc"
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            onChange={handleChange}
            type="integer"
            className="form-control"
            id="price"
            placeholder="Add your price here"
            name="price"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="img" className="form-label">
            Image
          </label>
          <input
            onChange={handleChange}
            type="text"
            className="form-control"
            id="img"
            placeholder="Add Image here"
            name="img"
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">
            Submit house for rent
          </button>
        </div>
      </form>
    </div>
  );
}