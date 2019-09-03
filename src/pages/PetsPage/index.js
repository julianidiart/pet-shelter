import React from "react";
import PetsSummary from "../../components/PetsSummary";
import PetsListFilters from "../../components/PetsList/PetsListFilters";
import PetsList from "../../components/PetsList";

export default props => (
  <div>
    <PetsSummary />
    <PetsListFilters />
    <PetsList />
  </div>
);
