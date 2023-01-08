import React from "react";
import Movielist from "./MovieList";
import { MovieProvider } from "./MovieContext";
import Nav from "./Nav";
import AddMovie from "./AddMovie";

 const App=()=> {
  
    return (
      <MovieProvider>
      <div className="App">
      <Nav/>
      <AddMovie/>
       <Movielist/>
      </div>
      </MovieProvider>
    );
  }


export default App;
