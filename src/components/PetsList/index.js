import React from "react";
import PetsListItem from "./PetsListItem";
import { connect } from "react-redux";

const PetsList = props => (
  <div>
    {props.pets &&
      props.pets.map(pet => {
        return <PetsListItem key={pet.id} {...pet} />;
      })}
  </div>
);

const mapStateToProps = state => {
  return {
    pets: state.pets
  };
};

export default connect(mapStateToProps)(PetsList);
