// Import All Our Components
import AllBeers from "./pages/AllBeers"
import SingleBeer from "./pages/SingleBeer";
import Form from "./pages/Form"


// Import React and hooks
import { useState, useEffect } from "react";

// Import components from React Router
import { Route, Switch, Link } from "react-router-dom";


function App(props) {

 

  ////////////////////
  // Style Objects
  ////////////////////

  const h1 = {
    textAlign: "center",
    margin: "10px",
    backgroundColor: "grey",
    color: "white",
    
  };
  const button = {
    backgroundColor: "white",
    display: "block",
    margin: "auto",
   
  };

  const h2 = {
    color: "red"
  }

  
  ///////////////
  // State & Other Variables
  ///////////////

  //  Api Url
  const url = "https://beer-app-api-ser.herokuapp.com/beers/";

  // State to Hold The List of Posts
  const [beers, setBeers] = useState([]);

  const nullBeer = {
    brand: "",
    style: "",
    country: "",
  };

  const [targetBeer, setTargetBeer] = useState(nullBeer);

 
  //////////////
  // Functions
  //////////////
const getBeers = async () => {
  const response = await fetch(url);
  const data = await response.json();
  setBeers(data);
};

const addBeers = async (newBeer) => {
  const response = await fetch(url, {
    method: "post", 
    headers: { "Content-Type": "application/json", }, 
    body: JSON.stringify(newBeer),
  });
  getBeers();
}

const getTargetBeer = (beer) => {
  setTargetBeer(beer);
  props.history.push("/edit")
};

// Function to edit todo on form submission
const updateBeer = async (beer) => {
  const response = await fetch(url + beer.id + "/", {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(beer),
  });

  // get updated list 
  getBeers();
};

const deleteBeer = async (beer) => {
  const response = await fetch(url + beer.id + "/", {
    method: "delete",
  });

  // get updated list 
  getBeers();
  props.history.push("/beers");
};

  //////////////
  // useEffects
  //////////////
useEffect(() =>{
  getBeers();
}, []);
  /////////////////////
  // returned JSX
  /////////////////////
  return (
    <div className="App">
      <h1 style={h1}>Inventory of Beers</h1>
      <Link to="/new"><button>Create New Beer</button></Link>
      <Switch>
        <Route exact path="/beers" render= {(routerProps) => <AllBeers {...routerProps} beers={beers}/> } />
        <Route path="/beers/:id" render={(routerProps) => <SingleBeer {...routerProps} beers={beers} edit={getTargetBeer} deleteBeer={deleteBeer}/> } />
        <Route path="/new" render={(routerProps) => <Form {...routerProps} initialBeer={nullBeer} handleSubmit={addBeers} buttonLabel="create beer" /> } />
        <Route path="/edit" render={(routerProps) => <Form {...routerProps} initialBeer={targetBeer} handleSubmit={updateBeer} buttonLabel="update beer"/> } />
      </Switch>
    </div>
  );
}

export default App;