import React from "react";
import { connect } from "react-redux";
import PetsListItem from "./PetsListItem";
import selectPets from "../../selectors/pets";

export const PetsList = ({ pets }) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Pets</div>
      <div className="show-for-desktop">Name</div>
      <div className="show-for-desktop">Place</div>
    </div>
    <div className="list-body">
      {pets.length === 0 ? (
        <div className="list-item list-item--message">
          <span>No pets!</span>
        </div>
      ) : (
        pets &&
        pets.map(pet => {
          return <PetsListItem key={pet.id} {...pet} />;
        })
      )}
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
    pets: selectPets(state.pets, state.filters)
  };
};

export default connect(mapStateToProps)(PetsList);
