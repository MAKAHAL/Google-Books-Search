import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import './App.css';
import Search from "./pages/search";
import Saved from "./pages/saved"
import NavBar from "./components/NavBar";
import Header from "./components/Header";
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
        <NavBar />
          <Header />
          
        <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={Saved} />
        </div>
      </Router>
    );
  }
}
export default App;