import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMars,
  faVenus,
  faCheckCircle
} from "@fortawesome/free-solid-svg-icons";

export default ({ id, name, place, sex, breed, sterilized, size, color }) => {
  const gender =
    sex.toLowerCase() === "m" ? (
      <FontAwesomeIcon icon={faMars} title="male" />
    ) : (
      <FontAwesomeIcon icon={faVenus} title="female" />
    );
  return (
    <Link className="list-item" to={`/pets/${id}`}>
      <div>
        <h3 className="list-item__title">
          {name + " "} {gender}{" "}
          {sterilized && (
            <FontAwesomeIcon
              icon={faCheckCircle}
              title="sterilized"
              color="green"
            />
          )}
        </h3>
        <span className="list-item__sub-title">
          {breed + " " + (color ? "(" + color + ")" : "")}
        </span>
      </div>
      <div>
        <h3 className="list-item__place">{place}</h3>
      </div>
    </Link>
  );
};
