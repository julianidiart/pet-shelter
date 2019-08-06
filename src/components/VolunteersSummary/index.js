import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import selectVolunteers from "../../selectors/volunteers";

export const VolunteersSummary = ({ volunteersCount }) => {
  const volunteerWord = volunteersCount === 1 ? "volunteer" : "volunteers";

  return (
    <div className="page-header">
      <div className="content-container">
        <div className="page-header__top">
          <h1 className="page-header__title">
            Viewing <span>{volunteersCount}</span> {volunteerWord}
          </h1>
          <div className="page-header__actions">
            <Link className="button" to="/add-pet">
              Add Volunteer
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const visiblePets = selectVolunteers(state.volunteers, state.filters);

  return {
    volunteersCount: visiblePets.length
  };
};

export default connect(mapStateToProps)(VolunteersSummary);
