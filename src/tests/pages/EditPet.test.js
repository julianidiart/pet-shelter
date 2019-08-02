import React from "react";
import { shallow } from "enzyme";
import pets from "../fixtures/pets";
import { EditPetPage } from "../../pages/PetsPage/EditPetPage";
import PetForm from "../../components/PetForm";

let startEditPet, startRemovePet, history, wrapper;

beforeEach(() => {
  startEditPet = jest.fn();
  startRemovePet = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditPetPage
      startEditPet={startEditPet}
      startRemovePet={startRemovePet}
      history={history}
      pet={pets[0]}
    />
  );
});

test("should render EditPetPage", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should handle startEditPet", () => {
  wrapper.find(PetForm).prop("onSubmit")(pets[0]);
  expect(history.push).toHaveBeenLastCalledWith("/pets");
  expect(startEditPet).toHaveBeenLastCalledWith(pets[0].id, pets[0]);
});

test("should handle startRemovePet", () => {
  wrapper.find("button").simulate("click");
  expect(history.push).toHaveBeenLastCalledWith("/pets");
  expect(startRemovePet).toHaveBeenLastCalledWith({ id: pets[0].id });
});
