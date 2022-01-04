import React from "react";
import { Link } from "react-router-dom";


const Beer = ({ beer }) => {
  //////////////////
  // Style Objects
  //////////////////
  const div = {
    textAlign: "center",
    border: "3px solid",
    margin: "10px auto",
    width: "80%",
  };
  return (
    <div style={div}>
      <Link to={`/beers/${beer.id}`}>
        <h1>{beer.brand}</h1>
      </Link>
      <h2>{beer.style}</h2>
      <h2>{beer.country}</h2>
    </div>
  );
};

export default Beer;