import { addPet, editPet, removePet } from "../../actions/pets";
import pets from "../fixtures/pets";

test("should setup remove pet action object", () => {
  const action = removePet("123abc");
  expect(action).toEqual({
    type: "REMOVE_PET",
    id: "123abc"
  });
});

test("should setup edit pet action object", () => {
  const action = editPet("123abc", { name: "Pet new name" });
  expect(action).toEqual({
    type: "EDIT_PET",
    id: "123abc",
    pet: {
      name: "Pet new name"
    }
  });
});

test("should setup add pet action object with provided values", () => {
  const pet = addPet(pets[0]);
  const action = addPet(pet);
  expect(action).toEqual({
    type: "ADD_PET",
    pet
  });
});

test("should add pet to database and store", () => {});

test("should add pet with defaults to database and store", () => {});
