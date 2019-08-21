// @flow

import React from "react";
import { shallowWithIntl } from "../../../helper/enzymeHelper";
import { FormattedMessage } from "react-intl";

import { RenderApp } from "./renderApp";


describe("RenderApp component", () => {
	let props = {};

	beforeEach(() => {
		props = {
			onLangChange: () => jest.fn(),
			intl: {
				formatMessage: msg => msg
			},
		};
	});

	test("should render 'formatMessage' using FormattedMessage", () => {
		const wrapper = shallowWithIntl(<RenderApp {...props} />);

		expect(wrapper.find(FormattedMessage)).toHaveLength(1);
		expect(
			wrapper.find(FormattedMessage).prop("defaultMessage")
		).toEqual("Learn React default message");
	});

	test("should render 'formatMessage' using props.intl", () => {
		const wrapper = shallowWithIntl(<RenderApp {...props} />);

		expect(wrapper.find(".intl-message-block")).toHaveLength(1);
		expect(
			wrapper.find(".intl-message-block").prop("children").defaultMessage
		).toBe("This is subtitle");
	});
});
