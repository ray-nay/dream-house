import React, {useEffect, useState, } from 'react'
import { useParams} from 'react-router-dom'

export default function Review (){

  const [selectedReviews, setSelectedReviews] = useState({})
  let {id}=useParams()


  useEffect(() => {
    fetch(`http://localhost:3000/reviews/${id}`)
      .then(res => res.json())
      .then((data) => setSelectedReviews(data))
  }, [])
  console.log(selectedReviews)

  return(
    <>
    <div>
      <b><p>Review:{selectedReviews.comment}</p></b>
     
    </div>

    </>
  )
}