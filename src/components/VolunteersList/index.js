import React from "react";
import { connect } from "react-redux";
import VolunteersListItem from "./VolunteersListItem";
import { selectVolunteers } from "../../selectors/volunteers";
import MultiLanguageText from "../MultiLanguageText";

export const VolunteersList = ({ volunteers }) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">
        <MultiLanguageText en="Volunteer" it="Volontario" es="Voluntario" />
      </div>
      <div className="show-for-desktop">
        <MultiLanguageText en="Name" it="Nome" es="Nombre" />
      </div>
      <div className="show-for-desktop">
        <MultiLanguageText en="Volunteer" it="Rimanere" es="Estadia" />
      </div>
    </div>
    <div className="list-body">
      {volunteers.length === 0 ? (
        <div className="list-item list-item--message">
          <span>No volunteers!</span>
        </div>
      ) : (
        volunteers &&
        volunteers.map(volunteer => {
          return <VolunteersListItem key={volunteer.id} {...volunteer} />;
        })
      )}
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
    volunteers: selectVolunteers(state.volunteers, state.filters)
  };
};

export default connect(mapStateToProps)(VolunteersList);
