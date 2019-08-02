import React, { Component } from "react";
import { connect } from "react-redux";
import PetForm from "../../../components/PetForm";
import { startEditPet, startRemovePet } from "../../../actions/pets";

export class EditPetPage extends Component {
  onSubmit = pet => {
    this.props.startEditPet(this.props.pet.id, pet);
    this.props.history.push("/pets");
  };
  onClick = () => {
    this.props.startRemovePet({ id: this.props.pet.id });
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
  startEditPet: (id, pet) => dispatch(startEditPet(id, pet)),
  startRemovePet: id => dispatch(startRemovePet(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPetPage);
