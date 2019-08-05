import React from "react";
import { connect } from "react-redux";
import PetsListItem from "./PetsListItem";
import selectPets from "../../selectors/pets";

export const PetsList = ({ pets }) => (
  <div>
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
