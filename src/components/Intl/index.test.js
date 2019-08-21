// @flow

import React from "react";
import { shallow } from "enzyme";
import IntlComponent from "./";

describe("IntlComponent", () => {
    const ChildrenComponent = ({ value }) => <div>{value}</div>;
    let props;

    beforeEach(() => {
        props = {
            locale: "en",
            messages: {
                "nav.dashboard": "Learn React DEFAULT"
            }
        };
    });

    test("should render IntlProvider", () => {
        const childValue = "children block";
        const wrapper = shallow(
            <IntlComponent {...props}>
                <ChildrenComponent value={childValue} />
            </IntlComponent>
        );

        expect(wrapper.find(ChildrenComponent)).toHaveLength(1);
        expect(
            wrapper.find(ChildrenComponent).prop("value")
        ).toEqual(childValue);
    });
});
