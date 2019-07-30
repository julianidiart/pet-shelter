import database from "../firebase";
import moment from "moment";

// ADD_PET
export const addPet = pet => ({
  type: "ADD_PET",
  pet
});

export const startAddPet = (petData = {}) => {
  return dispatch => {
    const { name = "", birthDate = moment() } = petData;
    const pet = { name, birthDate };
    database
      .ref("pet")
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
