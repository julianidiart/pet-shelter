import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import selectPets from "../../selectors/pets";

export const PetsSummary = ({ petCount }) => {
  const petWord = petCount === 1 ? "pet" : "pets";

  return (
    <div className="page-header">
      <div className="content-container">
        <div className="page-header__top">
          <h1 className="page-header__title">
            Viewing <span>{petCount}</span> {petWord}
          </h1>
          <div className="page-header__actions">
            <Link className="button" to="/add-pet">
              Add Pet
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
