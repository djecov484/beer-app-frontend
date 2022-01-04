import React from "react";
import { Link } from "react-router-dom";

import  ConfirmAlert  from "../components/ConfirmAlert";

// destructuring the props needed to get our post, including router prop match
const SingleBeer = ({ beers, match, edit, deleteBeer }) => {
  const id = parseInt(match.params.id); //get the id from url param
  const beer = beers.find((beer) => beer.id === id);

  ////////////////////
  // Styles
  ///////////////////
  const div = {
    textAlign: "center",
    border: "3px solid green",
    width: "80%",
    margin: "30px auto",
  };

  return (
    <div style={div}>
      <h1>{beer.brand}</h1>
      <h2>{beer.style}</h2>
      <h2>{beer.country}</h2>
      <button onClick={(event) => edit(beer)}>Edit</button>
      
      <ConfirmAlert deleteBeer={deleteBeer} beer={beer} > </ConfirmAlert>
      
      <Link to="/beers">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default SingleBeer;