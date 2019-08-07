import React, { Component } from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";

export default class VolunteerForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.volunteer ? props.volunteer.name : "",
      arrivalDate: props.volunteer
        ? moment(props.volunteer.arrivalDate)
        : moment(),
      depatureDate: props.volunteer
        ? moment(props.volunteer.depatureDate)
        : moment(),
      country: props.volunteer ? props.volunteer.country : "",
      arrivalCalendarFocused: false,
      depatureCalendarFocused: false,
      error: ""
    };
  }

  onInputChange = e => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState(() => ({ [name]: value }));
  };

  onArrivalDateChange = arrivalDate => {
    if (arrivalDate) {
      this.setState(() => ({ arrivalDate }));
    }
  };

  onDepatureDateChange = depatureDate => {
    if (depatureDate) {
      this.setState(() => ({ depatureDate }));
    }
  };

  onArrivalFocusChange = ({ focused }) => {
    this.setState(() => ({ arrivalCalendarFocused: focused }));
  };

  onDepatureFocusChange = ({ focused }) => {
    this.setState(() => ({ depatureCalendarFocused: focused }));
  };

  onSubmit = e => {
    e.preventDefault();

    if (this.state.name) {
      const error = "";
      this.setState(() => ({ error }));
      this.props.onSubmit({
        name: this.state.name,
        arrivalDate: this.state.arrivalDate.valueOf(),
        depatureDate: this.state.depatureDate.valueOf(),
        country: this.state.country
      });
    } else {
      const error = "The volunteer should have a name!";
      this.setState(() => ({ error }));
    }
  };

  render() {
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
        <input
          className="text-input"
          onChange={this.onInputChange}
          placeholder="Country"
          type="text"
          value={this.state.country}
          name="country"
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <SingleDatePicker
            date={this.state.arrivalDate}
            onDateChange={this.onArrivalDateChange}
            focused={this.state.arrivalCalendarFocused}
            onFocusChange={this.onArrivalFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
            displayFormat={() => "DD/MM/YYYY"}
          />
          <SingleDatePicker
            date={this.state.depatureDate}
            onDateChange={this.onDepatureDateChange}
            focused={this.state.depatureCalendarFocused}
            onFocusChange={this.onDepatureFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
            displayFormat={() => "DD/MM/YYYY"}
          />
        </div>
        <div>
          <button className="button">Save Volunteer</button>
        </div>
      </form>
    );
  }
}
