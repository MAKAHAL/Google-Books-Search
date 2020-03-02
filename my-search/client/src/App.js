import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import search from "./pages/search";
import saved from "./pages/saved"
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={search} />
            <Route exact path="/saved" component={saved} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;