import React, { Component } from "react";

export default class PetForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.pet ? props.pet.name : "",
      error: ""
    };
  }

  onNameChange = e => {
    const name = e.target.value;
    this.setState(() => ({ name }));
  };

  onSubmit = e => {
    e.preventDefault();

    if (this.state.name) {
      const error = "";
      this.setState(() => ({ error }));
      this.props.onSubmit({
        name: this.state.name
      });
    } else {
      const error = "Debe llenar todos los campos obligatorios";
      this.setState(() => ({ error }));
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            autoFocus
            onChange={this.onNameChange}
            placeholder="Nombre de la mascota"
            type="text"
            value={this.state.name}
          />
          <button>Guardar Mascota</button>
        </form>
      </div>
    );
  }
}
