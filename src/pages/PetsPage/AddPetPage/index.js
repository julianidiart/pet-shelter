import React from "react";
import { connect } from "react-redux";
import PetForm from "../../../components/PetForm";
import { startAddPet } from "../../../actions/pets";

const AddPetPage = props => {
  return (
    <div>
      <PetForm
        onSubmit={pet => {
          props.dispatch(startAddPet(pet));
          props.history.push("/pets");
        }}
      />
    </div>
  );
};

export default connect()(AddPetPage);
