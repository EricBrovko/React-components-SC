// @flow

/**
 * This was coppied from https://github.com/formatjs/react-intl/blob/master/docs/Testing-with-React-Intl.md#enzyme
 * Components using the react-intl module require access to the intl context.
 * This is not available when mounting single components in Enzyme.
 * These helper functions aim to address that and wrap a valid,
 * English-locale intl context around them.
 */

import { type Element as ReactElement } from "react";
import { IntlProvider } from "react-intl";
import { mount, shallow } from "enzyme";

// You can pass your messages to the IntlProvider. Optional: remove if unneeded.
// const messages = require('../locales/en'); // en.json

export function mountWithIntl(node: ReactElement<any>) {
  return mount(node, {
    wrappingComponent: IntlProvider,
    wrappingComponentProps: {
      locale: "en",
      defaultLocale: "en",
      messages: {},
    },
  });
}


export function shallowWithIntl(node: ReactElement<any>) {
  return shallow(node, {
    wrappingComponent: IntlProvider,
    wrappingComponentProps: {
      locale: "en",
      defaultLocale: "en",
      messages: {},
    },
  });
}
