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
      sex: props.pet ? props.pet.sex : "M",
      breed: props.pet ? props.pet.breed : "",
      calendarFocused: false,
      error: ""
    };
  }

  onInputChange = e => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState(() => ({ [name]: value }));
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
    const duration = moment.duration(
      moment().diff(moment(this.state.birthdate))
    );
    const years =
      duration.years() > 0
        ? duration.years() + " year" + (duration.years() > 1 ? "s " : " ")
        : "";
    const months =
      duration.months() > 0
        ? duration.months() + " month" + (duration.months() > 1 ? "s " : " ")
        : "";
    const days =
      duration.days() > 0
        ? duration.days() + " day" + (duration.days() > 1 ? "s" : "")
        : "";
    const age = years + months + days;
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input
          autoFocus
          onChange={this.onInputChange}
          placeholder="Name"
          className="text-input"
          type="text"
          value={this.state.name}
          name="name"
        />
        <div className="input-group">
          <SingleDatePicker
            date={this.state.birthdate}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
            displayFormat={() => "DD/MM/YYYY"}
          />
          <span>{age.length > 0 ? <span>{age}</span> : null}</span>
        </div>
        <select
          className="select"
          value={this.state.sex}
          onChange={this.onInputChange}
          name="sex"
        >
          <option value="m">Male</option>
          <option value="f">Female</option>
        </select>
        <input
          className="text-input"
          onChange={this.onInputChange}
          placeholder="Breed"
          type="text"
          value={this.state.breed}
          name="breed"
        />
        <input
          className="text-input"
          onChange={this.onInputChange}
          placeholder="Chip"
          type="text"
          value={this.state.chip}
          name="chip"
        />
        <input
          className="text-input"
          onChange={this.onInputChange}
          placeholder="Place"
          type="text"
          value={this.state.place}
          name="place"
        />
        <div>
          <button className="button">Save Pet</button>
        </div>
      </form>
    );
  }
}
