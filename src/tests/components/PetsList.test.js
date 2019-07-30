import React from "react";
import { shallow } from "enzyme";
import { PetsList } from "../../components/PetsList";
import pets from "../fixtures/pets";

test("should render PetsList with pets", () => {
  const wrapper = shallow(<PetsList pets={pets} />);
  expect(wrapper).toMatchSnapshot();
});

test("should render PetsList with empty message", () => {
  const wrapper = shallow(<PetsList pets={[]} />);
  expect(wrapper).toMatchSnapshot();
});
