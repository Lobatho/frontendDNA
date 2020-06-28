import React, {Component} from 'react';
import ReactDOM from "react-dom";

class NewHuman extends Component {
  constructor(){
    super();
    this.state = {
      show:false,
      name:"",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  showModal = () => {
    this.setState({show:true});
  };

  hideModal = () => {
    this.setState({show: false});

  };


  handleInputChange(e){
    const {value, name} = e.target;
    console.log(value);
    this.setState({
      [name]: value
    });
  }
  handleSubmit(e){
    fetch('https://cors-anywhere.herokuapp.com/'+'http://dnatask-env.eba-uhwmba5d.us-east-2.elasticbeanstalk.com/v1/dna/'+this.state.name, {method:'PUT'})
    this.setState({show: false});
  };


  render(){
    return (
      <main>
        <Modal show={this.state.show} handleClose={this.handleSubmit}>
          <form>
            <div className="form-group">
              <span className="dotBlue"></span>
              </div>
            <div className="form-group">
            <input type="text"
              name="name"
              className="form-control"
              value={this.state.name}
              onChange={this.handleInputChange}
               placeholder="Nombre Humano"></input>
            </div>
          </form>
        </Modal>
        <button className="btn btn-pill btn-danger mt-4 ml-5" type="button" onClick={this.showModal}>Nuevo Humano</button>
      </main>

    );
  }
}

  const Modal = ({handleClose, show, children}) => {
  const showHideClassName = show ? "modal display-block": "modal display-none";

  return (
    <div className={showHideClassName}>
    <section className="modal-main" >
    {children}
    <button type="submit" className="btn btn-warning rounded-pill" onClick={handleClose}>Crear humano</button>
    </section>
    </div>
  );
  };


const container = document.createElement("div");
document.body.appendChild(container);

export default NewHuman
