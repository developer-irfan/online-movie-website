import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import AllMovies from "./AllMovies";
import Hollywood from "./Hollywood";
import Topmovies from "./Topmovies";
import NewMovies from "./NewMovies";
import Footer from "./Footer";
import MainContext from "../src/Context/MainContext";

function App() {
  return (
    <>
     
        <Navbar />
       
        <Switch>
        <MainContext>
          <Route exact path="/" component={AllMovies} />
          <Route exact path="/topmovies" component={Topmovies} />
          <Route exact path="/hollywood" component={Hollywood} />
          <Route exact path="/newmovies" component={NewMovies} />
          </MainContext>
        </Switch>
        <br></br>
        <Footer />
    
    </>
  );
}

export default App;
