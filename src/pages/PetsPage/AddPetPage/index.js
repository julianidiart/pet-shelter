import React, { Component } from "react";
import { connect } from "react-redux";
import PetForm from "../../../components/PetForm";
import { startAddPet } from "../../../actions/pets";

export class AddPetPage extends Component {
  onSubmit = pet => {
    this.props.startAddPet(pet);
    this.props.history.push("/pets");
  };
  render() {
    return (
      <div>
        <PetForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startAddPet: pet => dispatch(startAddPet(pet))
});

export default connect(
  undefined,
  mapDispatchToProps
)(AddPetPage);
