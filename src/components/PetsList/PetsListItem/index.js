import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

export default ({ id, name, birthdate, chip, place, images, sex }) => {
  return (
    <div>
      <Link to={`/pets/${id}`}>
        <h3>Name: {name}</h3>
        <p>Sex: {sex}</p>
        <p>Birthdate: {moment(birthdate).format("DD/MM/YYYY")}</p>
        <p>Place: {place}</p>
        <p>Chip? {chip === "" ? "No" : "Yes, nº " + chip}</p>
        <h2>Images</h2>
        {images.length > 0 ? (
          images.map(url => <img src={url} alt={name} />)
        ) : (
          <p>No images yet!</p>
        )}
      </Link>
    </div>
  );
};
