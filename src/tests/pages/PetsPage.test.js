import React from "react";
import { shallow } from "enzyme";
import PetsPage from "../../pages/PetsPage";

test("should render PetsPage correctly", () => {
  const wrapper = shallow(<PetsPage />);
  expect(wrapper).toMatchSnapshot();
});
