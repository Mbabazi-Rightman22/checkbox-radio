import React, { Component } from "react";
import "./styles.css";
import './CheckBox/CheckBox';
import CheckBox from "./CheckBox/CheckBox";

class App extends Component {
  render () {
  return (
    <div className="App">
      <CheckBox />
    </div>
  );
}
}

export default App;
