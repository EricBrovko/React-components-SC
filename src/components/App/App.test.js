// @flow

import React from "react";
import { shallow } from "enzyme";
import App, { IntlProvider, RenderApp } from "./App";

describe("App component", () => {
    test("should render App", () => {
        const wrapper = shallow(<App />);
        
        expect(wrapper.find(IntlProvider)).toHaveLength(1);
        // expect(wrapper.find(RenderApp)).toHaveLength(1);

        // expect(wrapper.find(IntlProvider).prop("locale")).toBe("en");
        // wrapper.setState({ lang: "ge" });
        // expect(wrapper.find(IntlProvider).prop("locale")).toBe("ge");
    });
});
