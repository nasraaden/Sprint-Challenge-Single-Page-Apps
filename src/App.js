import React from "react";
import {Route} from "react-router-dom";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import SearchForm from "./components/SearchForm.js";
import {Link} from "react-router-dom";




export default function App() {
  return (
    <main>
      <div className="button-container">
      <Link to="/" className="button">Home</Link>
        <Link to="/characters" className="button">Characters</Link>
        <Link to="/characters/search" className="button">Search</Link>
      </div>
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/characters" component={CharacterList} />
      <Route path="/characters/search" component={SearchForm} />
    </main>
  );
}
