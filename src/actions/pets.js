import uuid from "uuid";

// ADD_PET
export const addPet = pet => ({
  type: "ADD_PET",
  pet: {
    ...pet,
    id: uuid()
  }
});

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
