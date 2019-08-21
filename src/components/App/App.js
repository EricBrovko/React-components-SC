// @flow

import "./App.css";
import React from "react";

import IntlProvider from "../Intl";
import RenderApp from "./subcomponents/renderApp";

import { getBrowserLanguage } from "../../utils/lang";
import { getMessages } from "../../helper/messageHelper";

const lang = getBrowserLanguage();


class App extends React.PureComponent<*, *> {
	state = {
		lang: lang
	};

	onLangChange = (lang: string) => this.setState({ lang });

	render() {
		const messages = getMessages(this.state.lang);

		return (
			<IntlProvider locale={this.state.lang} messages={messages}>
				<RenderApp onLangChange={this.onLangChange} />
			</IntlProvider>
		);
	}
}

export default App;
export {
	IntlProvider,
	RenderApp
};

