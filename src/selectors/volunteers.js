import moment from "moment";

export default (volunteers, { text, sortBy, startDate, endDate }) => {
  return volunteers
    .filter(volunteer => {
      const arrivalDateMoment = moment(volunteer.arriveDateMoment);
      const depatureDateMoment = moment(volunteer.arriveDateMoment);
      const startDateMatch = startDate
        ? startDate.isSameOrBefore(arrivalDateMoment, "day")
        : true;
      const endDateMatch = endDate
        ? endDate.isSameOrAfter(depatureDateMoment, "day")
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
