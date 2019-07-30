import React, { Component } from "react";
import { connect } from "react-redux";
import PetForm from "../../../components/PetForm";
import { editPet, removePet } from "../../../actions/pets";

export class EditPetPage extends Component {
  onSubmit = pet => {
    this.props.editPet(this.props.pet.id, pet);
    this.props.history.push("/pets");
  };
  onClick = () => {
    this.props.removePet(this.props.pet.id);
    this.props.history.push("/pets");
  };
  render() {
    return (
      <div>
        <PetForm pet={this.props.pet} onSubmit={this.onSubmit} />
        <button onClick={this.onClick}>Remove</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    pet: state.pets.find(pet => pet.id === props.match.params.id)
  };
};

const mapDispatchToProps = dispatch => ({
  editPet: (id, pet) => dispatch(editPet(id, pet)),
  removePet: id => dispatch(removePet(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPetPage);
