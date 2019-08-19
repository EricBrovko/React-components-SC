// @flow

import React from "react";
import "./App.css";

import { FormControl, InputGroup, Button } from 'react-bootstrap';

class App extends React.Component<*, *> {

  state = {
    value: "",
    isLoading: false
  }


  componentDidMount() {
  }

  onInputChange = (v: any) => {
    this.setState({
      value: v
    });
  }

  sendMessage = () => {
  }
  render() {
    return (
      <div className="App container">
        <h1>I am a sender</h1>
        <br />
        <div className="">
          {
            this.state.isLoading ? "Message is sending..." : (
              <div>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="message">Message</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    placeholder="Please type your message"
                    aria-label="Phone number"
                    aria-describedby="message"
                    value={this.state.value}
                    onChange={e => this.onInputChange(e.target.value)}
                  />
                </InputGroup>
                <br />

                <Button
                  variant="primary"
                  onClick={this.sendMessage}
                >
                  Send
              </Button>
              </div>
            )
          }
        </div>

      </div>
    );
  }
}


// function App() {
//   return (
//     <div className="App">
//     <div className="test">123</div>
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         {/* <ButtonToolbar>
//           <Button variant="primary">Primary</Button>
//           <Button variant="secondary">Secondary</Button>
//           <Button variant="success">Success</Button>
//           <Button variant="warning">Warning</Button>
//           <Button variant="danger">Danger</Button>
//           <Button variant="info">Info</Button>
//           <Button variant="light">Light</Button>
//           <Button variant="dark">Dark</Button>
//           <Button variant="link">Link</Button>
//           <Button variant="outline-success">Success</Button>
//           <Button variant="outline-warning">Warning</Button>
//         </ButtonToolbar> */}
//       </header>
//     </div>
//   );
// }

export default App;
