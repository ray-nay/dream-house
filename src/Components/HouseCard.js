import React from "react";
import { Link } from "react-router-dom";

export default function HouseCard({title, image, id, location}) {

  return (
    <div className="col">
    <div className="card">
      <img src={image} className="card-img-top" alt="House" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
           {location} 
        </p>
        <Link to={`/house/${id}`} className="btn btn-primary">
          View More
        </Link>
      </div>
    </div>
    </div>
  );
}