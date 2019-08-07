import React, { Component } from "react";
import { connect } from "react-redux";
import VolunteerForm from "../../../components/VolunteerForm";
import { startAddVolunteer } from "../../../actions/volunteers";

export class AddVolunteerPage extends Component {
  onSubmit = volunteer => {
    this.props.startAddVolunteer(volunteer);
    this.props.history.push("/volunteers");
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add Volunteer</h1>
          </div>
        </div>
        <div className="content-container">
          <VolunteerForm onSubmit={this.onSubmit} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startAddVolunteer: volunteer => dispatch(startAddVolunteer(volunteer))
});

export default connect(
  undefined,
  mapDispatchToProps
)(AddVolunteerPage);
