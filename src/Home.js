import React, {Component} from 'react';
import './App.css';
import LoginForm from './components/LoginForm.js'
import AnalizeHumans from './components/AnalizeHumans.js'

class Home extends Component {
constructor(){
  super();
  this.state={
    humans: [],
    isFetch: true,
    nameNewHuman: '',
  }
}


componentDidMount (){
  fetch('https://cors-anywhere.herokuapp.com/'+'http://dnatask-env.eba-uhwmba5d.us-east-2.elasticbeanstalk.com/v1/getAll/')
  .then(response=>response.json())
  .then(humansJson=>this.setState({ humans: humansJson.result, isFetch:false}))
}
render(){
const human = this.state.humans.map((human, i) => {
      return (

        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-title text-center">
            {(() => {
              if(human.mutation)
              return <span className="dotRed"></span>
              else {
                return <span className="dotGreen"></span>
              }

            })()}
              <h3>{human.name}</h3>

            </div>
            <div className="card-body">
              Creado el: 2020/01/01
            </div>
            <div className="card-footer">
            {(() => {
              if(human.mutation)
              return <p className="text-danger">Con Mutación</p>;
              else {
                return <p className="text-success">Sin Mutación</p>;
              }

    })()}
            </div>
          </div>
        </div>
      )
    });

    // RETURN THE COMPONENT
    return (
      <div className="App">

        <div className="container">
          <div className="row mt-4">

            <div className="col-md-8">
              <div className="row">
                {human}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
