import moment from "moment";

export default [
  {
    id: "1",
    name: "Marla",
    birthdate: moment(0)
      .subtract(2, "years")
      .valueOf(),
    chip: "123ABC123",
    place: "Barchetta",
    sex: "F"
  },
  {
    id: "2",
    name: "Bimba",
    birthdate: moment(0)
      .subtract(1.5, "years")
      .valueOf(),
    chip: "123ABC123",
    place: "Barchetta",
    sex: "F"
  },
  {
    id: "3",
    name: "Aimee",
    birthdate: moment(0)
      .subtract(6, "months")
      .valueOf(),
    chip: "123ABC123",
    place: "Barchetta",
    sex: "F"
  },
  {
    id: "4",
    name: "Maia",
    birthdate: moment(0)
      .subtract(3.5, "years")
      .valueOf(),
    chip: "",
    place: "Campagna",
    sex: "F"
  },
  {
    id: "5",
    name: "Emma",
    birthdate: moment(0)
      .subtract(11, "years")
      .valueOf(),
    chip: "",
    place: "Barchetta",
    sex: "F"
  },
  {
    id: "6",
    name: "Tommy",
    birthdate: moment(0)
      .subtract(8, "years")
      .valueOf(),
    chip: "123ABC123",
    place: "Macelo",
    sex: "M"
  },
  {
    id: "7",
    name: "Bello Bruno",
    birthdate: moment(0)
      .subtract(9, "years")
      .valueOf(),
    chip: "",
    place: "Sasi",
    sex: "M"
  },
  {
    id: "8",
    name: "Bubu",
    birthdate: moment(0)
      .subtract(4, "years")
      .valueOf(),
    chip: "123ABC123",
    place: "Sasi",
    sex: "M"
  },
  {
    id: "9",
    name: "Blaky",
    birthdate: moment(0)
      .subtract(5, "years")
      .valueOf(),
    chip: "",
    place: "Macelo",
    sex: "M"
  }
];
