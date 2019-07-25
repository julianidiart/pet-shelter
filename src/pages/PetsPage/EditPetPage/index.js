import React from "react";
import { connect } from "react-redux";
import PetForm from "../../../components/PetForm";
import { editPet, removePet } from "../../../actions/pets";

const EditPetPage = props => {
  return (
    <div>
      <PetForm
        pet={props.pet}
        onSubmit={pet => {
          props.dispatch(editPet(props.pet.id, pet));
          props.history.push("/pets");
        }}
      />
      <button
        onClick={() => {
          props.dispatch(removePet(props.pet.id));
          props.history.push("/pets");
        }}
      >
        Eliminar
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    pet: state.pets.find(pet => pet.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditPetPage);
