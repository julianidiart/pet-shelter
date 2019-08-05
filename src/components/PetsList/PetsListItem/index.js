import React from "react";
import { Link } from "react-router-dom";

export default ({ id, name, place, sex }) => {
  return (
    <Link className="list-item" to={`/pets/${id}`}>
      <div>
        <h3>{name + " (" + sex.toUpperCase() + ")"}</h3>
      </div>
      <div>
        <h3>{place}</h3>
      </div>
    </Link>
  );
};
