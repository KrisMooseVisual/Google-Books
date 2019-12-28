import React, { Component } from "react";
import Header from "./components/Header/headerIndex";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Books from "./components/BookList/Books";


class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
       <Books />
      </div>
    );
  }
}

export default App;
