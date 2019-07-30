import React from "react";
import PetsListItem from "./PetsListItem";
import { connect } from "react-redux";

export const PetsList = props => (
  <div>
    {props.pets.length === 0 ? (
      <p>Add a pet to start!</p>
    ) : (
      props.pets &&
      props.pets.map(pet => {
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
