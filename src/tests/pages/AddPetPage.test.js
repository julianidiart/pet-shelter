import React from "react";
import { shallow } from "enzyme";
import { AddPetPage } from "../../pages/PetsPage/AddPetPage";
import PetForm from "../../components/PetForm";
import pets from "../fixtures/pets";

let startAddPet, history, wrapper;

beforeEach(() => {
  startAddPet = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddPetPage startAddPet={startAddPet} history={history} />);
});

test("should render AddPetPage correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should handle onSubmit", () => {
  wrapper.find(PetForm).prop("onSubmit")(pets[0]);
  expect(history.push).toHaveBeenLastCalledWith("/pets");
  expect(startAddPet).toHaveBeenLastCalledWith(pets[0]);
});
