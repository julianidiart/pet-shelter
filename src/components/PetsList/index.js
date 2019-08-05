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
    {pets.length === 0 ? (
      <p>Add a pet to start!</p>
    ) : (
      pets &&
      pets.map(pet => {
        return <PetsListItem key={pet.id} {...pet} />;
      })
    )}
  </div>
);

const mapStateToProps = state => {
  return {
    pets: selectPets(state.pets, state.filters)
  };
};

export default connect(mapStateToProps)(PetsList);
