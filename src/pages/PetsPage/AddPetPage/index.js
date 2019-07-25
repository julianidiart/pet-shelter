import React from "react";
import { connect } from "react-redux";
import PetForm from "../../../components/PetForm";
import { addPet } from "../../../actions/pets";

const AddPetPage = props => {
  return (
    <div>
      <PetForm
        onSubmit={pet => {
          props.dispatch(addPet(pet));
          props.history.push("/pets");
        }}
      />
    </div>
  );
};

export default connect()(AddPetPage);
