import React from "react";

import VolunteersSummary from "../../components/VolunteersSummary";
import VolunteersListFilters from "../../components/VolunteersList/VolunteersListFilters";
import VolunteersList from "../../components/VolunteersList";

export default props => (
  <div>
    <VolunteersSummary />
    <VolunteersListFilters />
    <VolunteersList />
  </div>
);
