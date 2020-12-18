import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

import React from "react";
import App from "./App";
Enzyme.configure({ adapter: new Adapter() });

describe("App component", () => {
  let wrapper = shallow(<App />);

  it("should renders without crashing", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
