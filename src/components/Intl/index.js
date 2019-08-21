// @flow

import React, { type Node as ReactNode } from "react";
import { IntlProvider } from "react-intl";

type Props = {
    children: ReactNode,
    locale: string,
    messages: I18nMessages
};

const IntlComponent = ({ locale, messages, children }: Props) => (
    <IntlProvider locale={locale} messages={messages}>
        {children}
    </IntlProvider>
);

export default IntlComponent;
