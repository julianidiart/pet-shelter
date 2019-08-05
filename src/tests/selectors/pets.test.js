import moment from "moment";
import selectPets from "../../selectors/pets";
import pets from "../fixtures/pets";

test("should filter by text value", () => {
  const filters = {
    text: pets[1].name,
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  };
  const result = selectPets(pets, filters);
  expect(result).toEqual([pets[1]]);
});

test("should filter by startDate", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: moment(0).subtract(8, "months"),
    endDate: undefined
  };
  const result = selectPets(pets, filters);
  expect(result).toEqual([pets[2]]);
});

test("should filter by endDate", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: moment(0).add(10, "years")
  };
  const result = selectPets(pets, filters);
  expect(result).toEqual([
    pets[2],
    pets[1],
    pets[0],
    pets[3],
    pets[7],
    pets[8],
    pets[5],
    pets[6],
    pets[4]
  ]);
});

test("should sort by date", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  };
  const result = selectPets(pets, filters);
  expect(result).toEqual([
    pets[2],
    pets[1],
    pets[0],
    pets[3],
    pets[7],
    pets[8],
    pets[5],
    pets[6],
    pets[4]
  ]);
});
