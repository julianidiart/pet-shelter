import React from "react";
import { Link } from "react-router-dom";

export default ({ id, name }) => {
  return (
    <div>
      <Link to={`/pets/${id}`}>
        <h3>{name}</h3>
      </Link>
    </div>
  );
};
