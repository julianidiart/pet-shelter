import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moment from "moment";
import {
  startAddPet,
  addPet,
  editPet,
  removePet,
  setPets,
  startSetPets,
  startRemovePet,
  startEditPet
} from "../../actions/pets";
import pets from "../fixtures/pets";
import database from "../../firebase";

const uid = "testuid";
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

beforeEach(done => {
  const petsData = {};
  pets.forEach(
    ({
      id,
      name,
      birthdate,
      chip,
      place,
      sex,
      breed,
      sterilized,
      size,
      color,
      avatarURL,
      adopted,
      passedAway,
      comments
    }) => {
      petsData[id] = {
        name,
        birthdate,
        chip,
        place,
        sex,
        breed,
        sterilized,
        size,
        color,
        avatarURL,
        adopted,
        passedAway,
        comments
      };
    }
  );
  database
    .ref(`users/${uid}/pets`)
    .set(petsData)
    .then(() => done());
});

test("should setup remove pet action object", () => {
  const action = removePet({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_PET",
    id: "123abc"
  });
});

test("should remove pet from firebase", done => {
  const store = createMockStore(defaultAuthState);
  const id = pets[0].id;
  store
    .dispatch(startRemovePet({ id }))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "REMOVE_PET",
        id
      });
      return database.ref(`users/${uid}/pets/${id}`).once("value");
    })
    .then(snapshot => {
      expect(snapshot.val()).toBeFalsy();
      done();
    });
});

test("should setup edit pet action object", () => {
  const action = editPet("123abc", { name: "Pet new name" });
  expect(action).toEqual({
    type: "EDIT_PET",
    id: "123abc",
    updates: {
      name: "Pet new name"
    }
  });
});

test("should edit pet from firebase", done => {
  const store = createMockStore(defaultAuthState);
  const id = pets[0].id;
  const updates = { chip: "321CBA321" };
  store
    .dispatch(startEditPet(id, updates))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "EDIT_PET",
        id,
        updates
      });
      return database.ref(`users/${uid}/pets/${id}`).once("value");
    })
    .then(snapshot => {
      expect(snapshot.val().chip).toBe(updates.chip);
      done();
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

test("should add pet to database and store", done => {
  const store = createMockStore(defaultAuthState);
  const petData = {
    name: "Pepito",
    birthdate: moment(0).valueOf(),
    chip: "123BVS123",
    place: "Macelo",
    sex: "M",
    breed: "Incrocio",
    sterilized: true,
    size: "M",
    color: "White",
    avatarURL: "",
    adopted: false,
    passedAway: false,
    comments: "Need meds!"
  };
  store
    .dispatch(startAddPet(petData))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_PET",
        pet: {
          id: expect.any(String),
          ...petData
        }
      });
      return database
        .ref(`users/${uid}/pets/${actions[0].pet.id}`)
        .once("value");
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(petData);
      done();
    });
});

test("should add pet with defaults to database and store", done => {
  const store = createMockStore(defaultAuthState);
  const petDefaultData = {
    name: "",
    birthdate: moment(0).valueOf(),
    chip: "",
    place: "",
    sex: "",
    breed: "",
    sterilized: false,
    size: "",
    color: "",
    avatarURL: "",
    adopted: false,
    passedAway: false,
    comments: ""
  };
  store
    .dispatch(startAddPet({}))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_PET",
        pet: {
          id: expect.any(String),
          ...petDefaultData
        }
      });
      return database
        .ref(`users/${uid}/pets/${actions[0].pet.id}`)
        .once("value");
    })
    .then(snapshot => {
      expect({ ...snapshot.val() }).toEqual(petDefaultData);
      done();
    });
});

test("should setup set pets action object with data", () => {
  const action = setPets(pets);
  expect(action).toEqual({
    type: "SET_PETS",
    pets
  });
});

test("should fetch the pets from firebase", done => {
  const store = createMockStore(defaultAuthState);
  store.dispatch(startSetPets()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "SET_PETS",
      pets
    });
    done();
  });
});
