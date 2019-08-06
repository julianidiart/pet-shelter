import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moment from "moment";
import {
  startAddVolunteer,
  addVolunteer,
  editVolunteer,
  removeVolunteer,
  setVolunteers,
  startSetVolunteers,
  startRemoveVolunteer,
  startEditVolunteer
} from "../../actions/volunteers";
import volunteers from "../fixtures/volunteers";
import database from "../../firebase";

const uid = "testuid";
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

beforeEach(done => {
  const volunteersData = {};
  volunteers.forEach(({ id, name, arrivalDate, depatureDate, country }) => {
    volunteersData[id] = { name, arrivalDate, depatureDate, country };
  });
  database
    .ref(`users/${uid}/volunteers`)
    .set(volunteersData)
    .then(() => done());
});

test("should setup remove volunteer action object", () => {
  const action = removeVolunteer({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_VOLUNTEER",
    id: "123abc"
  });
});

test("should remove volunteer from firebase", done => {
  const store = createMockStore(defaultAuthState);
  const id = volunteers[0].id;
  store
    .dispatch(startRemoveVolunteer({ id }))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "REMOVE_VOLUNTEER",
        id
      });
      return database.ref(`users/${uid}/volunteers/${id}`).once("value");
    })
    .then(snapshot => {
      expect(snapshot.val()).toBeFalsy();
      done();
    });
});

test("should setup edit volunteer action object", () => {
  const action = editVolunteer("123abc", { name: "Volunteer new name" });
  expect(action).toEqual({
    type: "EDIT_VOLUNTEER",
    id: "123abc",
    updates: {
      name: "Volunteer new name"
    }
  });
});

test("should edit volunteer from firebase", done => {
  const store = createMockStore(defaultAuthState);
  const id = volunteers[0].id;
  const updates = { name: "Juan" };
  store
    .dispatch(startEditVolunteer(id, updates))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "EDIT_VOLUNTEER",
        id,
        updates
      });
      return database.ref(`users/${uid}/volunteers/${id}`).once("value");
    })
    .then(snapshot => {
      expect(snapshot.val().name).toBe(updates.name);
      done();
    });
});

test("should setup add volunteer action object with provided values", () => {
  const volunteer = addVolunteer(volunteers[0]);
  const action = addVolunteer(volunteer);
  expect(action).toEqual({
    type: "ADD_VOLUNTEER",
    volunteer
  });
});

test("should add volunteer to database and store", done => {
  const store = createMockStore(defaultAuthState);
  const volunteerData = {
    name: "Juan",
    arrivalDate: moment(0).valueOf(),
    depatureDate: moment(0)
      .add(1, "M")
      .valueOf(),
    country: "Argentina"
  };
  store
    .dispatch(startAddVolunteer(volunteerData))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_VOLUNTEER",
        volunteer: {
          id: expect.any(String),
          ...volunteerData
        }
      });
      return database
        .ref(`users/${uid}/volunteers/${actions[0].volunteer.id}`)
        .once("value");
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(volunteerData);
      done();
    });
});

test("should add volunteer with defaults to database and store", done => {
  const store = createMockStore(defaultAuthState);
  const volunteerDefaultData = {
    name: "",
    arrivalDate: moment(0).valueOf(),
    depatureDate: moment(0).valueOf(),
    country: ""
  };
  store
    .dispatch(startAddVolunteer({}))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_VOLUNTEER",
        volunteer: {
          id: expect.any(String),
          ...volunteerDefaultData
        }
      });
      return database
        .ref(`users/${uid}/volunteers/${actions[0].volunteer.id}`)
        .once("value");
    })
    .then(snapshot => {
      expect({ ...snapshot.val() }).toEqual(volunteerDefaultData);
      done();
    });
});

test("should setup set volunteers action object with data", () => {
  const action = setVolunteers(volunteers);
  expect(action).toEqual({
    type: "SET_VOLUNTEERS",
    volunteers
  });
});

test("should fetch the volunteers from firebase", done => {
  const store = createMockStore(defaultAuthState);
  store.dispatch(startSetVolunteers()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "SET_VOLUNTEERS",
      volunteers
    });
    done();
  });
});
