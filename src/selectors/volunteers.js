import moment from "moment";

export default (volunteers, { text, calendarDate }) => {
  return volunteers
    .filter(volunteer => {
      const arrivalDateMoment = moment(volunteer.arrivalDate);
      const depatureDateMoment = moment(volunteer.depatureDate);
      const calendarDateMatch =
        calendarDate === null ||
        moment(calendarDate).isBetween(
          arrivalDateMoment,
          depatureDateMoment,
          "day",
          "[]"
        );
      const textMatch =
        volunteer.name.toLowerCase().includes(text.toLowerCase()) ||
        volunteer.country.toLowerCase().includes(text.toLowerCase());

      return calendarDateMatch && textMatch;
    })
    .sort((a, b) => {
      return a.arrivalDate > b.arrivalDate ? 1 : -1;
    });
};
