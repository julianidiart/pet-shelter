import React, { Component } from "react";
import { connect } from "react-redux";
import PetForm from "../../../components/PetForm";
import { startAddPet } from "../../../actions/pets";

export class AddPetPage extends Component {
  onSubmit = pet => {
    console.log(pet);
    this.props.startAddPet(pet);
    this.props.history.push("/pets");
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add Pet</h1>
          </div>
        </div>
        <div className="content-container">
          <PetForm onSubmit={this.onSubmit} />
        </div>
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
