import React, { Component } from "react";
import { connect } from "react-redux";
import VolunteerForm from "../../../components/VolunteerForm";
import {
  startEditVolunteer,
  startRemoveVolunteer
} from "../../../actions/volunteers";
import MultiLanguageText from "../../../components/MultiLanguageText";

export class EditVolunteerPage extends Component {
  onSubmit = async volunteer => {
    await this.props.startEditVolunteer(this.props.volunteer.id, volunteer);
    this.props.history.push("/volunteers");
  };
  onClick = async () => {
    await this.props.startRemoveVolunteer({ id: this.props.volunteer.id });
    this.props.history.push("/volunteers");
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">
              <MultiLanguageText
                en="Add Volunteer"
                it="Aggiungi Volontario"
                es="Agregar Voluntario"
              />
            </h1>
          </div>
        </div>
        <div className="content-container">
          <VolunteerForm
            volunteer={this.props.volunteer}
            onSubmit={this.onSubmit}
          />
          <button className="button button--secondary" onClick={this.onClick}>
            <MultiLanguageText
              en="Remove Volunteer"
              it="Rimuovere Volontario"
              es="Eliminar Voluntario"
            />
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    volunteer: state.volunteers.find(
      volunteer => volunteer.id === props.match.params.id
    )
  };
};

const mapDispatchToProps = dispatch => ({
  startEditVolunteer: (id, volunteer) =>
    dispatch(startEditVolunteer(id, volunteer)),
  startRemoveVolunteer: id => dispatch(startRemoveVolunteer(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditVolunteerPage);
