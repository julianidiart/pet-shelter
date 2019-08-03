import React, { Component } from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";

export default class PetForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.pet ? props.pet.name : "",
      birthdate: props.pet ? moment(props.pet.birthdate) : moment(),
      chip: props.pet ? props.pet.chip : "",
      place: props.pet ? props.pet.place : "",
      sex: props.pet ? props.pet.sex : "",
      breed: props.pet ? props.pet.breed : "",
      calendarFocused: false,
      error: ""
    };
  }

  onNameChange = e => {
    const name = e.target.value;
    this.setState(() => ({ name }));
  };

  onDateChange = birthdate => {
    if (birthdate) {
      this.setState(() => ({ birthdate }));
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
        birthdate: this.state.birthdate.valueOf(),
        chip: this.state.chip,
        place: this.state.place,
        sex: this.state.sex,
        breed: this.state.breed
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
            date={this.state.birthdate}
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
