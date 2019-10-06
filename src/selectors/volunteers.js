import moment from "moment";

export const selectVolunteers = (
  volunteers,
  { text, calendarDate, startDate }
) => {
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
      let upcomingArrival = true;
      if (startDate) {
        upcomingArrival = startDate.unix() * 1000 <= volunteer.arrivalDate;
      }
      return calendarDateMatch && textMatch && upcomingArrival;
    })
    .sort((a, b) => {
      return a.arrivalDate > b.arrivalDate ? 1 : -1;
    });
};

export const nextVolunteerToArrive = volunteers => {
  const now = moment();
  let closestDate = null;
  let nextVolunteer = null;
  volunteers.forEach(volunteer => {
    const arrivalDateMoment = moment(volunteer.arrivalDate);
    if (arrivalDateMoment.isSameOrAfter(now)) {
      if (!nextVolunteer) nextVolunteer = volunteer;
      if (!closestDate) closestDate = volunteer.arrivalDate;
      if (arrivalDateMoment.isSameOrBefore(moment(closestDate))) {
        closestDate = volunteer.arrivalDate;
        nextVolunteer = volunteer;
      }
    }
  });
  return nextVolunteer;
};
