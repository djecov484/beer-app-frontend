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
      <Link to={`/beer/${beer.id}`}>
        <h1>{beer.subject}</h1>
      </Link>
      <h2>{beer.details}</h2>
    </div>
  );
};

export default Beer;