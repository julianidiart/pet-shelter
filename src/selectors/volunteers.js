import moment from "moment";

export default (volunteers, { text, sortBy, startDate, endDate }) => {
  return volunteers
    .filter(volunteer => {
      const arrivalDateMoment = moment(volunteer.arrivalDate);
      const depatureDateMoment = moment(volunteer.depatureDate);
      const startDateMatch = startDate
        ? startDate.isSameOrAfter(arrivalDateMoment, "day")
        : true;
      const endDateMatch = endDate
        ? endDate.isSameOrBefore(depatureDateMoment, "day")
        : true;
      const textMatch =
        volunteer.name.toLowerCase().includes(text.toLowerCase()) ||
        volunteer.country.toLowerCase().includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.arrivalDate < b.arrivalDate ? 1 : -1;
      }
      return a.name < b.name ? 1 : -1;
    });
};
