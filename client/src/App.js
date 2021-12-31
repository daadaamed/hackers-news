import { StoriesContainer } from './containers/StoriesContainer';

// export const App = () => <StoriesContainer />;


import React, { useState } from "react";
// import "./App.css";

import NavBar from "./components/NavBar.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TopAuthors from "./components/TopAuthors";

function App() {
//   const [searching, setSearching] = useState("");
 
  
//   const addMovie = (movieEl) => {
//     setMovies([...movies, movieEl]);
//   };

  return (
    <div className="App">
    <NavBar />
      {/* <BrowserRouter> */}
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <div>
                <StoriesContainer />
              </div>
            )}
          />
          <Route
            exact
            path="/TopAuthors"
            // render={(props) => <MovieInfo items={movies}{...props} />} 
            render={() => (
                <div>
                  {/* <TopAuthors /> */}
                </div>
              )}
          />
        </Switch>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
