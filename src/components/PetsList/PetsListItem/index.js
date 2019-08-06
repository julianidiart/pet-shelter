import React from "react";
import { Link } from "react-router-dom";

export default ({ id, name, place, sex, breed }) => {
  return (
    <Link className="list-item" to={`/pets/${id}`}>
      <div>
        <h3 className="list-item__title">
          {name + " (" + sex.toUpperCase() + ")"}
        </h3>
        <span className="list-item__sub-title">{breed}</span>
      </div>
      <div>
        <h3 className="list-item__place">{place}</h3>
      </div>
    </Link>
  );
};
