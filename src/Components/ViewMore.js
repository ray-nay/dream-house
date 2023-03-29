import React, {useEffect, useState, } from 'react'
import { useParams, Link } from 'react-router-dom'
import HouseCard from './HouseCard'
import Review from './Review'

export default function ViewMore() {

  const [selectedHouses, setSelectedHouses] = useState({})
  let {id}=useParams()
   
console.log({id})

//fetching the selected House.

  useEffect(() => {
    fetch(`http://localhost:9292/houses/${id}`)
      .then(res => res.json())
      .then((data) => setSelectedHouses(data))
  }, [])
  console.log(selectedHouses)
  return (
    <div className='Details'>
       <img src ={selectedHouses.img}/>
       <h1>{selectedHouses.title}</h1> 
        <p>{selectedHouses.desc}</p>
        <b><p>PRICE:{selectedHouses.price}</p></b>
        {/* <p>{selectedHouses.user.review}</p> */}
        
        <Link to={"/"} className="btn btn-primary">
          Back
        </Link>
        <Review/>
     </div>
     
  )
  
}