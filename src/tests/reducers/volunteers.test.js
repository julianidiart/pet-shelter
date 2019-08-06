import volunteersReducer from "../../reducers/volunteers";
import volunteers from "../fixtures/volunteers";

test("should set default state", () => {
  const state = volunteersReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove volunteer by id", () => {
  const action = {
    type: "REMOVE_VOLUNTEER",
    id: volunteers[0].id
  };
  const state = volunteersReducer(volunteers, action);
  expect(state).toEqual(
    volunteers.filter(volunteer => volunteer.id !== volunteers[0].id)
  );
});

test("should not remove volunteer if id not found", () => {
  const action = {
    type: "REMOVE_VOLUNTEER",
    id: "-1"
  };
  const state = volunteersReducer(volunteers, action);
  expect(state).toEqual(volunteers);
});

test("should add a volunteer", () => {
  const volunteer = {
    id: "123abc",
    name: "Juan"
  };
  const action = {
    type: "ADD_VOLUNTEER",
    volunteer
  };
  const state = volunteersReducer(volunteers, action);
  expect(state).toEqual([...volunteers, volunteer]);
});

test("should edit a volunteer", () => {
  const name = "Juan";
  const action = {
    type: "EDIT_VOLUNTEER",
    id: volunteers[0].id,
    updates: {
      name
    }
  };
  const state = volunteersReducer(volunteers, action);
  expect(state[0].name).toBe(name);
});

test("should not edit a volunteer if id not found", () => {
  const name = "Juan";
  const action = {
    type: "EDIT_VOLUNTEER",
    id: "-1",
    volunteer: {
      name
    }
  };
  const state = volunteersReducer(volunteers, action);
  expect(state).toEqual(volunteers);
});

test("should set volunteers", () => {
  const action = {
    type: "SET_VOLUNTEERS",
    volunteers: [volunteers[0]]
  };
  const state = volunteersReducer(volunteers, action);
  expect(state).toEqual([volunteers[0]]);
});
