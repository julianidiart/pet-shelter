import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import {
  selectVolunteers,
  nextVolunteerToArrive
} from "../../selectors/volunteers";

export const VolunteersSummary = ({ volunteersCount, nextVolunteer }) => {
  const volunteerWord = volunteersCount === 1 ? "volunteer" : "volunteers";

  return (
    <div className="page-header">
      <div className="content-container">
        <div className="page-header__top">
          <h1 className="page-header__title">
            Viewing <span>{volunteersCount}</span> {volunteerWord}
          </h1>
          <div className="page-header__actions">
            <Link className="button" to="/add-volunteer">
              Add Volunteer
            </Link>
          </div>
        </div>
        {nextVolunteer ? (
          <p className="page-header__title">
            <i>Next to arrive: </i>
            {nextVolunteer.name +
              " (" +
              moment(nextVolunteer.arrivalDate).format("DD/MM/YYYY") +
              ")"}
          </p>
        ) : (
          <p className="page-header__title">
            <i>No volunteers arriving soon!</i>
          </p>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const visibleVolunteers = selectVolunteers(state.volunteers, state.filters);
  const nextVolunteer = nextVolunteerToArrive(state.volunteers);

  return {
    volunteersCount: visibleVolunteers.length,
    nextVolunteer: nextVolunteer
  };
};

export default connect(mapStateToProps)(VolunteersSummary);
