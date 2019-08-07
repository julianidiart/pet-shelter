import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

export default ({ id, name, arrivalDate, depatureDate, country }) => {
  const durationMoment = moment.duration(
    moment(depatureDate).diff(moment(arrivalDate))
  );
  const years =
    durationMoment.years() > 0
      ? durationMoment.years() +
        " year" +
        (durationMoment.years() > 1 ? "s " : " ")
      : "";
  const months =
    durationMoment.months() > 0
      ? durationMoment.months() +
        " month" +
        (durationMoment.months() > 1 ? "s " : " ")
      : "";
  const days =
    durationMoment.days() > 0
      ? durationMoment.days() + " day" + (durationMoment.days() > 1 ? "s" : "")
      : "";
  const duration = years + months + days;
  return (
    <Link className="list-item" to={`/volunteers/${id}`}>
      <div>
        <h3 className="list-item__title">{name}</h3>
        <span className="list-item__sub-title">{country}</span>
      </div>
      <div>
        <h3 className="list-item__place">
          {moment(arrivalDate).format("DD/MM/YYYY") +
            " - " +
            moment(depatureDate).format("DD/MM/YYYY")}
        </h3>
        <span className="list-item__sub-title-right">{duration}</span>
      </div>
    </Link>
  );
};
