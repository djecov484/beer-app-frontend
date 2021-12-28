import React from "react";
import Beer from "../components/beer";

const AllBeers = (props) =>{
    return props.beers.map((beer) => <Beer beer={beer} key={beer.id} />)
}
export default AllBeers;