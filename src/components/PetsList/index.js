import React from "react";
import { connect } from "react-redux";
import PetsListItem from "./PetsListItem";
import selectPets from "../../selectors/pets";
import MultiLanguageText from "../MultiLanguageText";

export const PetsList = ({ pets }) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">
        <MultiLanguageText en="Pet" it="Animale" es="Mascota" />
      </div>
      <div className="show-for-desktop">
        <MultiLanguageText en="Name" it="Nome" es="Nombre" />
      </div>
      <div className="show-for-desktop">
        <MultiLanguageText en="Place" it="Posto" es="Lugar" />
      </div>
    </div>
    <div className="list-body">
      {pets.length === 0 ? (
        <div className="list-item list-item--message">
          <span>
            <MultiLanguageText
              en="No pets!"
              it="No ci sono animali!"
              es="¡No hay mascotas!"
            />
          </span>
        </div>
      ) : (
        pets &&
        pets.map(pet => {
          return <PetsListItem key={pet.id} {...pet} />;
        })
      )}
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
    pets: selectPets(state.pets, state.filters)
  };
};

export default connect(mapStateToProps)(PetsList);
