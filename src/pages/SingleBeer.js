import React from "react";
import { Link } from "react-router-dom";

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
      <h1>{beer.subject}</h1>
      <h2>{beer.details}</h2>
      <button onClick={(event) => edit(beer)}>Edit</button>
      <button onClick={(event) => deleteBeer(beer)}>Delete</button>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default SingleBeer;