import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

export default ({ id, name, birthdate, chip, place, sex }) => {
  return (
    <div>
      <Link to={`/pets/${id}`}>
        <h3>Name: {name}</h3>
        <p>Sex: {sex}</p>
        <p>Birthdate: {moment(birthdate).format("DD/MM/YYYY")}</p>
        <p>Place: {place}</p>
        <p>Chip? {chip === "" ? "No" : "Yes, nº " + chip}</p>
      </Link>
    </div>
  );
};
