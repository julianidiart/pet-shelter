import React from "react";
import { shallow } from "enzyme";
import pets from "../fixtures/pets";
import { EditPetPage } from "../../pages/PetsPage/EditPetPage";
import PetForm from "../../components/PetForm";

let editPet, removePet, history, wrapper;

beforeEach(() => {
  editPet = jest.fn();
  removePet = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditPetPage
      editPet={editPet}
      removePet={removePet}
      history={history}
      pet={pets[0]}
    />
  );
});

test("should render EditPetPage", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should handle editPet", () => {
  wrapper.find(PetForm).prop("onSubmit")(pets[0]);
  expect(history.push).toHaveBeenLastCalledWith("/pets");
  expect(editPet).toHaveBeenLastCalledWith(pets[0].id, pets[0]);
});

test("should handle removePet", () => {
  wrapper.find("button").simulate("click");
  expect(history.push).toHaveBeenLastCalledWith("/pets");
  expect(removePet).toHaveBeenLastCalledWith(pets[0].id);
});
