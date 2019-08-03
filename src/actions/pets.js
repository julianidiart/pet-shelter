import database from "../firebase";
import moment from "moment";

// ADD_PET
export const addPet = pet => ({
  type: "ADD_PET",
  pet
});

export const startAddPet = (petData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      name = "",
      birthdate = moment(0).valueOf(),
      chip = "",
      place = "",
      sex = ""
    } = petData;
    const pet = { name, birthdate, chip, place, sex };
    return database
      .ref(`users/${uid}/pets`)
      .push(pet)
      .then(ref => {
        dispatch(addPet({ id: ref.key, ...pet }));
      });
  };
};

// REMOVE_PET
export const removePet = ({ id } = {}) => ({
  type: "REMOVE_PET",
  id
});

export const startRemovePet = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/pets/${id}`)
      .remove()
      .then(() => {
        dispatch(removePet({ id }));
      });
  };
};

// EDIT_PET
export const editPet = (id, updates) => {
  return {
    type: "EDIT_PET",
    id,
    updates
  };
};

export const startEditPet = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/pets/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editPet(id, updates));
      });
  };
};

// SET_PET
export const setPets = pets => ({
  type: "SET_PETS",
  pets
});

export const startSetPets = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/pets`)
      .once("value")
      .then(snapshot => {
        const pets = [];

        snapshot.forEach(childSnapshot => {
          pets.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });

        dispatch(setPets(pets));
      });
  };
};
