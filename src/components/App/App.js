// @flow

import React from "react";
import { IntlProvider, FormattedMessage } from "react-intl";
import { FormControl, InputGroup, Button } from 'react-bootstrap';

import { getBrowserLanguage } from "../../utils/local";
import messages from "./messages";

import "./App.css";

const lang = getBrowserLanguage();


class App extends React.PureComponent<*, *> {
	state = {
		lang: lang
	};

	onLangChange = (lang: string) => this.setState({ lang });

	render() {
		return (
			<IntlProvider
				locale={this.state.lang}
				messages={messages[this.state.lang]}
			>
				<div className="App">
					<button className="test" onClick={() => this.onLangChange("en")}>en</button>
					<button className="test" onClick={() => this.onLangChange("ru")}>ru</button>
					<header className="App-header">
						<p>
						Edit <code>src/App.js</code> and save to reload.
						</p>
						<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
						>
							<FormattedMessage
								id="nav.dashboard"
								defaultMessage="Learn React DEFAULT"
							/>
						</a>
					</header>
				</div>
			</IntlProvider>
		);
	}
}

// function App() {
// 	const { locale=lang } = props;

// 	return (
// 		<IntlProvider locale={locale} messages={messages[locale]}>
// 			<div className="App">
// 				<button className="test" onClick={}>en</button>
// 				<button className="test" onClick={}>ru</button>
// 				<header className="App-header">
// 					<p>
// 					Edit <code>src/App.js</code> and save to reload.
// 					</p>
// 					<a
// 					className="App-link"
// 					href="https://reactjs.org"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 					>
// 						<FormattedMessage
// 							id="nav.dashboard"
// 							defaultMessage="Learn React DEFAULT"
// 						/>
// 					</a>
// 				</header>
// 			</div>
// 		</IntlProvider>
//     );
// }

// class App extends React.Component<*, *> {

// 	state = {
// 		value: "",
// 		isLoading: false
// 	}

// 	onInputChange = (v: any) => {
// 		this.setState({
// 			value: v
// 		});
// 	}

// 	sendMessage = () => {
// 	}
// 	render() {
// 		return (
// 			<div className="App container">
// 			        {/* <ButtonToolbar>
// 					<Button variant="primary">Primary</Button>
// 					<Button variant="secondary">Secondary</Button>
// 					<Button variant="success">Success</Button>
// 					<Button variant="warning">Warning</Button>
// 					<Button variant="danger">Danger</Button>
// 					<Button variant="info">Info</Button>
// 					<Button variant="light">Light</Button>
// 					<Button variant="dark">Dark</Button>
// 					<Button variant="link">Link</Button>
// 					<Button variant="outline-success">Success</Button>
// 					<Button variant="outline-warning">Warning</Button>
// 					</ButtonToolbar> */}
// 				<h1>I am a sender</h1>
// 				<br />
// 				<div className="">
// 					{
// 						this.state.isLoading ? "Message is sending..." : (
// 							<div>
// 								<br />
// 								<Button
// 									variant="primary"
// 									onClick={this.sendMessage}
// 								>
// 									Send
//                 				</Button>
// 							</div>
// 						)
// 					}
// 				</div>
// 			</div>
// 		);
// 	}
// }



export default App;
