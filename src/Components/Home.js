import React from 'react'

import HouseCard from './HouseCard'


export default function Home({houses}) {
    

  // console.log(data)


  return (
    <div id="card-content" className='row row-cols-1 row-cols-md-2 g-4'>
    {houses.map(house=><HouseCard title={house.title} image={house.image} key={house.id} id ={house.id} />)}
        
    </div>
  )
}
