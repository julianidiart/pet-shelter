import moment from "moment";

export default (pets, { text, sortBy, startDate, endDate }) => {
  return pets
    .filter(pet => {
      const birthdateMoment = moment(pet.birthdate);
      const startDateMatch = startDate
        ? startDate.isSameOrBefore(birthdateMoment, "day")
        : true;
      const endDateMatch = endDate
        ? endDate.isSameOrAfter(birthdateMoment, "day")
        : true;
      const textMatch =
        pet.name.toLowerCase().includes(text.toLowerCase()) ||
        pet.place.toLowerCase().includes(text.toLowerCase()) ||
        pet.breed.toLowerCase().includes(text.toLowerCase()) ||
        pet.color.toLowerCase().includes(text.toLowerCase()) ||
        pet.chip
          .toString()
          .toLowerCase()
          .includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.birthdate < b.birthdate ? 1 : -1;
      }
      return a.name < b.name ? 1 : -1;
    });
};
