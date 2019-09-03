import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import {
  selectVolunteers,
  nextVolunteerToArrive
} from "../../selectors/volunteers";
import MultiLanguageText from "../MultiLanguageText";

export const VolunteersSummary = ({ volunteersCount, nextVolunteer }) => {
  const volunteerWord =
    volunteersCount === 1 ? (
      <MultiLanguageText en="volunteer" it="volontario" es="voluntario" />
    ) : (
      <MultiLanguageText en="volunteers" it="volontari" es="voluntarios" />
    );

  return (
    <div className="page-header">
      <div className="content-container">
        <div className="page-header__top">
          <h1 className="page-header__title">
            <MultiLanguageText en="Viewing" it="Guardando" es="Viendo" />{" "}
            <span>{volunteersCount}</span> {volunteerWord}
          </h1>
          <div className="page-header__actions">
            <Link className="button" to="/add-volunteer">
              <MultiLanguageText
                en="Add Volunteer"
                it="Aggiungi Volontario"
                es="Agregar Voluntario"
              />
            </Link>
          </div>
        </div>
        {nextVolunteer ? (
          <p className="page-header__title">
            <i>
              <MultiLanguageText
                en="Next to arrive:"
                it="Prossimo arrivo:"
                es="Siguiente en llegar:"
              />
            </i>{" "}
            {nextVolunteer.name +
              " (" +
              moment(nextVolunteer.arrivalDate).format("DD/MM/YYYY") +
              ")"}
          </p>
        ) : (
          <p className="page-header__title">
            <i>
              <MultiLanguageText
                en="No volunteers arriving soon!"
                it="Nessun volontario arriverà presto!"
                es="¡No hay voluntarios llegando pronto!"
              />
            </i>
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
