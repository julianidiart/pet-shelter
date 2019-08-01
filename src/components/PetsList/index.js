import React from "react";
import PetsListItem from "./PetsListItem";
import { connect } from "react-redux";

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
    pets: state.pets
  };
};

export default connect(mapStateToProps)(PetsList);
