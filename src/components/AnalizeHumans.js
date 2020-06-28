import React, {Component} from 'react';
import '../App.css';
class WhitMutation extends Component {
constructor(){
  super();
  this.state={
    humans: [],
    isFetch: true,

  }


}


componentDidMount (){
  fetch('https://cors-anywhere.herokuapp.com/'+'http://dnatask-env.eba-uhwmba5d.us-east-2.elasticbeanstalk.com/v1/stats/')
  .then(response=>response.json())
  .then(humansJson=>this.setState({ humans: humansJson.result, isFetch:false}))
}
render(){
const human = this.state.humans.map((human, i) => {
      return (

        <div key={i}>
          <h1>CM:{parseInt(human.withMutation,10)} SM:{parseInt(human.withOutMutation,10)}</h1>
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

export default WhitMutation;
