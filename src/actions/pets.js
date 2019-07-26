import uuid from "uuid";
import database from "../firebase";

// ADD_PET
export const addPet = pet => ({
  type: "ADD_PET",
  pet
});

export const startAddPet = (petData = {}) => {
  return dispatch => {
    const { name = "" } = petData;
    const pet = { name };
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
