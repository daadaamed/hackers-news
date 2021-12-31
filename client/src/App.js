import { StoriesContainer } from './containers/StoriesContainer';
import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TopAuthors from "./components/TopAuthors";

function App() {
  const [searching, setSearching] = useState("");
  return (
    <div className="App">
    <NavBar />
      <BrowserRouter>
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
            render={() => (
                <div>
                <SearchAuthor
                  handleSearch={(e) => setSearching(e.target.value)}
                />
                  <TopAuthors
                    by={by.filter(
                    (choice) =>
                    choice.by
                    .toLowerCase()
                    .includes(searching.toLowerCase())
                                      )}
                  />
                </div>
              )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
