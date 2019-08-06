import moment from "moment";
import selectVolunteers from "../../selectors/volunteers";
import volunteers from "../fixtures/volunteers";

test("should filter by text value", () => {
  const filters = {
    text: volunteers[1].name,
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  };
  const result = selectVolunteers(volunteers, filters);
  expect(result).toEqual([volunteers[1]]);
});

test("should filter by startDate", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: moment(0).subtract(8, "months"),
    endDate: undefined
  };
  const result = selectVolunteers(volunteers, filters);
  expect(result).toEqual([
    volunteers[2],
    volunteers[1],
    volunteers[0],
    volunteers[3]
  ]);
});

test("should filter by endDate", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: moment(0).add(10, "years")
  };
  const result = selectVolunteers(volunteers, filters);
  expect(result).toEqual([
    volunteers[2],
    volunteers[1],
    volunteers[0],
    volunteers[3]
  ]);
});

test("should sort by date", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  };
  const result = selectVolunteers(volunteers, filters);
  expect(result).toEqual([
    volunteers[2],
    volunteers[1],
    volunteers[0],
    volunteers[3]
  ]);
});
