import database from "../firebase";
import moment from "moment";

// ADD_PET
export const addPet = pet => ({
  type: "ADD_PET",
  pet
});

export const startAddPet = (petData = {}) => {
  return dispatch => {
    const {
      name = "",
      birthdate = moment(0).valueOf(),
      chip = "",
      place = "",
      images = [],
      sex = ""
    } = petData;
    const pet = { name, birthdate, chip, place, images, sex };
    return database
      .ref("pets")
      .push(pet)
      .then(ref => {
        dispatch(addPet({ id: ref.key, ...pet }));
      });
  };
};

// REMOVE_PET
export const removePet = id => ({
  type: "REMOVE_PET",
  id
});

// EDIT_PET
export const editPet = (id, pet) => ({
  type: "EDIT_PET",
  id,
  pet
});
