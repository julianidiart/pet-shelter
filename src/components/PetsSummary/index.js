import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import selectPets from "../../selectors/pets";
import MultiLanguageText from "../MultiLanguageText";

export const PetsSummary = ({ petCount }) => {
  const petWord =
    petCount === 1 ? (
      <MultiLanguageText en="pet" it="animale" es="mascota" />
    ) : (
      <MultiLanguageText en="pets" it="animali" es="mascotas" />
    );

  return (
    <div className="page-header">
      <div className="content-container">
        <div className="page-header__top">
          <h1 className="page-header__title">
            <MultiLanguageText en="Viewing" it="Guardando" es="Viendo" />{" "}
            <span>{petCount}</span> {petWord}
          </h1>
          <div className="page-header__actions">
            <Link className="button" to="/add-pet">
              <MultiLanguageText
                en="Add Pet"
                it="Aggiungi Animale"
                es="Agregar Mascota"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const visiblePets = selectPets(state.pets, state.filters);

  return {
    petCount: visiblePets.length
  };
};

export default connect(mapStateToProps)(PetsSummary);
