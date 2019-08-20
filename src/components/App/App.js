// @flow

import React from "react";
import { FormattedMessage, injectIntl } from "react-intl";

import IntlProvider from "../Intl";
import { getBrowserLanguage } from "../../utils/lang";
import { getMessages } from "../../helper/messageHelper";
import messages from "./messages";
import "./App.css";

const lang = getBrowserLanguage();

const RenderApp = injectIntl(({ onLangChange, intl }: {
	onLangChange: (lang: string) => void,
	intl: Object
}) => (
	<div className="App">
		<button onClick={() => onLangChange("en")}>en</button>
		<button onClick={() => onLangChange("ru")}>ru</button>
		<header className="App-header">
			<a
				className="App-link"
				href="https://reactjs.org"
				target="_blank"
				rel="noopener noreferrer"
			>
				{/* the first variant */}
				<FormattedMessage
					id="nav.dashboard"
					defaultMessage="Learn React DEFAULT"
				/>
				<br />
				{/* the second variant with intl props */}
				{intl.formatMessage(messages.pageTitle)}
			</a>
		</header>
	</div>
));


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
