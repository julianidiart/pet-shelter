import React from "react";

import PetsList from "../../components/PetsList";

export default props => (
  <div>
    <button onClick={() => props.history.push("/add-pet")}>
      Agregar Mascota
    </button>
    <PetsList />
  </div>
);
