import { config } from "@fortawesome/fontawesome-svg-core";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SearchDropDownList from "./SearchDropDownList";
import React from "react";
configure({ adapter: new Adapter() });
describe("<SearchDropDownList/>", () => {
  it("should search items", () => {
    const wrapper = shallow(<SearchDropDownList options={[]} />);
    expect(wrapper.exists()).toBe(true);
  }); //allows you to write one test
});
