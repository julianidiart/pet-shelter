import petsReducer from "../../reducers/pets";
import pets from "../fixtures/pets";

test("should set default state", () => {
  const state = petsReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove pet by id", () => {
  const action = {
    type: "REMOVE_PET",
    id: pets[0].id
  };
  const state = petsReducer(pets, action);
  expect(state).toEqual(pets.filter(pet => pet.id !== pets[0].id));
});

test("should not remove pet if id not found", () => {
  const action = {
    type: "REMOVE_PET",
    id: "-1"
  };
  const state = petsReducer(pets, action);
  expect(state).toEqual(pets);
});

test("should add a pet", () => {
  const pet = {
    id: "123abc",
    name: "Pepita"
  };
  const action = {
    type: "ADD_PET",
    pet
  };
  const state = petsReducer(pets, action);
  expect(state).toEqual([...pets, pet]);
});

test("should edit a pet", () => {
  const name = "Pepita";
  const action = {
    type: "EDIT_PET",
    id: pets[0].id,
    updates: {
      name
    }
  };
  const state = petsReducer(pets, action);
  expect(state[0].name).toBe(name);
});

test("should not edit a pet if id not found", () => {
  const name = "Pepita";
  const action = {
    type: "EDIT_PET",
    id: "-1",
    pet: {
      name
    }
  };
  const state = petsReducer(pets, action);
  expect(state).toEqual(pets);
});

test("should set pets", () => {
  const action = {
    type: "SET_PETS",
    pets: [pets[0]]
  };
  const state = petsReducer(pets, action);
  expect(state).toEqual([pets[0]]);
});
