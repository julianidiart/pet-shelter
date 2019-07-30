import React from "react";
import { shallow } from "enzyme";
import PetsListItem from "../../components/PetsList/PetsListItem";
import pets from "../fixtures/pets";

test("should render PetsListItem correctly", () => {
  const wrapper = shallow(<PetsListItem {...pets[0]} />);
  expect(wrapper).toMatchSnapshot();
});
