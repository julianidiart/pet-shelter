import moment from "moment";

export default [
  {
    id: "1",
    name: "Juan",
    arrivalDate: moment(0)
      .subtract(1, "month")
      .valueOf(),
    depatureDate: moment(0)
      .subtract(10, "days")
      .valueOf(),
    country: "Spain"
  },
  {
    id: "2",
    name: "Julián",
    arrivalDate: moment(0)
      .subtract(3, "days")
      .valueOf(),
    depatureDate: moment(0).valueOf(),
    country: "Argentina"
  },
  {
    id: "3",
    name: "Estefanía",
    arrivalDate: moment(0)
      .subtract(3, "days")
      .valueOf(),
    depatureDate: moment(0).valueOf(),
    country: "Argentina"
  },
  {
    id: "4",
    name: "John",
    arrivalDate: moment(0)
      .subtract(10, "months")
      .valueOf(),
    depatureDate: moment(0)
      .subtract(6, "months")
      .valueOf(),
    country: "Italia"
  }
];
