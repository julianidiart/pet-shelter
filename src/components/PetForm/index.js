import React, { Component } from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";

export default class PetForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.pet ? props.pet.name : "",
      birthDate: props.pet ? moment(props.pet.birthDate) : moment(),
      calendarFocused: false,
      error: ""
    };
  }

  onNameChange = e => {
    const name = e.target.value;
    this.setState(() => ({ name }));
  };

  onDateChange = birthDate => {
    if (birthDate) {
      this.setState(() => ({ birthDate }));
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

  onSubmit = e => {
    e.preventDefault();

    if (this.state.name) {
      const error = "";
      this.setState(() => ({ error }));
      this.props.onSubmit({
        name: this.state.name,
        birthDate: this.state.birthDate.valueOf()
      });
    } else {
      const error = "The pet should have a name!";
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
            placeholder="Pet name"
            type="text"
            value={this.state.name}
          />
          <SingleDatePicker
            date={this.state.birthDate}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
            displayFormat={() => "DD/MM/YYYY"}
          />
          <button>Save Pet</button>
        </form>
      </div>
    );
  }
}
