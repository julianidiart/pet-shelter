import React from "react";
import { shallow } from "enzyme";
import Home from "../../pages/Home";

test("should render Home correctly", () => {
  const wrapper = shallow(<Home />);
  expect(wrapper).toMatchSnapshot();
});
