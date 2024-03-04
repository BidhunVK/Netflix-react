import React from "react";
import NavBar from "./Components/NavBar/NavBar.js";
import { originals , action } from "./url.js";
import './App.css'
import Banner from "./Components/Banner/Banner.js";
import RowPost from "./Components/RowPost/RowPost.js";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost title='Netflix Originals' url={originals} />
      <RowPost title='Action' isSmall url={action} />
    </div>
  );
}

export default App;
