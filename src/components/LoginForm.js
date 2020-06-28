import React, {Component} from 'react'

class LoginForm extends Component{
  render(){
    return (
      <div className="card">
        <form className="card-body">
          <div className="form-group">
            <input
              type="text"
              name="title"
              className="form-control"
              //value={this.state.title}
              //onChange={this.handleInputChange}
              placeholder="Usuario" />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="responsable"
          className="form-control"
          //value={this.state.responsable}
          //onChange={this.handleInputChange}
          placeholder="Contraseña" />
      </div>

      <button type="submit" className="btn btn-warning rounded-pill">Iniciar sesión</button>
      </form>
      </div>

    )
  }
}

export default LoginForm;
