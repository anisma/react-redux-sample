import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

import React from "react";
import SomeComponent from "./SomeComponent";
Enzyme.configure({ adapter: new Adapter() });

describe("Some component", () => {
  let wrapper = shallow(<SomeComponent />);

  it("should renders without crashing", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
