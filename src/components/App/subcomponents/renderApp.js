// @flow

import React from "react";
import { FormattedMessage, injectIntl } from "react-intl";
import messages from "../messages";


export const RenderApp = ({ onLangChange, intl }: {
	onLangChange: (lang: string) => any,
	intl: Object
}) => {
	return (
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
						defaultMessage="Learn React default message"
					/>
					<br />
					{/* the second variant with intl props */}
					<div className="intl-message-block">
						{intl.formatMessage(messages.pageTitle)}				
					</div>
				</a>
			</header>
		</div>
	)
};

export default injectIntl(RenderApp);
