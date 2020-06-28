import React, {Component} from 'react';
import './App.css';
import LoginForm from './components/LoginForm.js'
import AnalizeHumans from './components/AnalizeHumans.js'
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home.js'
import ReactDOM from "react-dom";
import NewHuman from './components/NewHuman.js'
import WhitMutation from './components/WhitMutation.js'
import WhitOutMutation from './components/WhitOutMutation.js'
class App extends Component {
  state={show:false}

  showModal = () => {
    this.setState({show:true});
  };

  hideModal = () => {
    this.setState({show: false});
  };

render(){

      return (
        <Router>
     <div>
     <div className="App">

       <nav className="navbar navbar-dark bg-primary">
         <a className="navbar-brand" href="/">
           ADN detector
         </a>
       </nav>

       <div className="container">
         <div className="row mt-4">
          <NewHuman/>
           <Link to="/AnalizeHumans"><button className="btn btn-pill btn-danger mt-4 ml-5">Analizar humanos</button></Link>
           <Link to="/WhitMutation"><button className="btn btn-pill btn-danger mt-4 ml-5">Con Mutación</button></Link>
           <Link to="/WhitOutMutation"><button className="btn btn-pill btn-danger mt-4 ml-5">Sin Mutación</button></Link>
         </div>
       </div>
     </div>

       {/* A <Switch> looks through its children <Route>s and
           renders the first one that matches the current URL. */}
       <Switch>
         <Route path="/AnalizeHumans">
           <AnalizeHumans />
         </Route>
         <Route path="/WhitMutation">
           <WhitMutation />
         </Route>
         <Route path="/WhitOutMutation">
           <WhitOutMutation />
         </Route>
         <Route path="/">
           <Home />
         </Route>
       </Switch>
     </div>
   </Router>
    );
  }
}


export default App;
