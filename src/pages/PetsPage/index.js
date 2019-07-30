import React from "react";

import PetsList from "../../components/PetsList";

export default props => (
  <div>
    <button onClick={() => props.history.push("/add-pet")}>Add pet</button>
    <PetsList />
  </div>
);
