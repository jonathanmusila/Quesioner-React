import configureMockStore from 'redux-mock-store';
import React from "react";
import { shallow } from "enzyme";
import axios from "axios";

import Home from "../src/components/Home";

const mockStore = configureMockStore();

const store = mockStore({});

jest.mock("axios");

describe("<Home /> component", () => {
  const getSpy = jest.spyOn(axios, "get");
  const wrapper = shallow(<Home store={store} />);

  test("renders without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("renders with correct state", () => {
    expect(shallow(<Home store={store} />).state("meetups")).toEqual([]);
  });

  test("mock fetch list of meetups from api", () => {
    expect(getSpy).toBeCalled();
    getSpy.mockClear();
  });
});