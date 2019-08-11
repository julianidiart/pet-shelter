import moment from "moment";

export default (pets, { text, sortBy, startDate, endDate, filter }) => {
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
        (pet.comments &&
          pet.comments.toLowerCase().includes(text.toLowerCase())) ||
        (pet.color
          ? pet.color.toLowerCase().includes(text.toLowerCase())
          : false) ||
        pet.chip
          .toString()
          .toLowerCase()
          .includes(text.toLowerCase());
      let filterMatch = true;
      const adoptedOrPassedAway = pet.adopted || pet.passedAway;
      switch (filter) {
        case "sterilized":
          filterMatch = !adoptedOrPassedAway && pet.sterilized === true;
          break;
        case "non-sterilized":
          filterMatch = !adoptedOrPassedAway && pet.sterilized === false;
          break;
        case "chipped":
          filterMatch = !adoptedOrPassedAway && pet.chip !== "";
          break;
        case "non-chipped":
          filterMatch = !adoptedOrPassedAway && pet.chip === "";
          break;
        case "adopted":
          filterMatch = pet.adopted === true;
          break;
        case "passed-away":
          filterMatch = pet.passedAway === true;
          break;
        default:
          filterMatch = !adoptedOrPassedAway;
      }

      return startDateMatch && endDateMatch && textMatch && filterMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.birthdate < b.birthdate ? 1 : -1;
      }
      return a.name < b.name ? 1 : -1;
    });
};
