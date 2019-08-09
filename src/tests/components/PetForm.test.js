import React from "react";
import { shallow } from "enzyme";
import { SingleDatePicker } from "react-dates";
import moment from "moment";
import PetForm from "../../components/PetForm";
import pets from "../fixtures/pets";

test("should render PetForm correctly", () => {
  const wrapper = shallow(<PetForm />);
  expect(wrapper).toMatchSnapshot();
});

test("should render PetForm with pet date", () => {
  const wrapper = shallow(<PetForm pet={pets[0]} />);
  expect(wrapper).toMatchSnapshot();
});

test("should render error for invalid form submission", () => {
  const wrapper = shallow(<PetForm />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find("form").simulate("submit", { preventDefault: () => {} });
  expect(wrapper.state("error").length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test("should set name on input change", () => {
  const value = "Name";
  const wrapper = shallow(<PetForm />);
  wrapper
    .find("input")
    .at(0)
    .simulate("change", { target: { value } });
  expect(wrapper.state("name")).toBe(value);
});

test("should call onSubmit prop for valid form submission", () => {
  const onSubmit = jest.fn();
  const wrapper = shallow(<PetForm pet={pets[0]} onSubmit={onSubmit} />);
  wrapper.find("form").simulate("submit", { preventDefault: () => {} });
  expect(wrapper.state("error")).toBe("");
  expect(onSubmit).toHaveBeenLastCalledWith({
    name: pets[0].name,
    birthdate: pets[0].birthdate,
    chip: pets[0].chip,
    place: pets[0].place,
    sex: pets[0].sex,
    breed: pets[0].breed,
    sterilized: pets[0].sterilized,
    size: pets[0].size,
    color: pets[0].color,
    avatarURL: pets[0].avatarURL
  });
});

test("should set new date on date change", () => {
  const now = moment();
  const wrapper = shallow(<PetForm />);
  wrapper.find(SingleDatePicker).prop("onDateChange")(now);
  expect(wrapper.state("birthdate")).toEqual(now);
});

test("should set calendar focus on change", () => {
  const focused = true;
  const wrapper = shallow(<PetForm />);
  wrapper.find(SingleDatePicker).prop("onFocusChange")({ focused });
  expect(wrapper.state("calendarFocused")).toBe(focused);
});
