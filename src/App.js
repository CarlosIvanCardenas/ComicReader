import React from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import ComicList from "./components/ComicList";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ComicList/>
    </div>
  );
}

export default App;
