## React-intl

#### Note that the `id` attribute should be unique for the whole application
Prefer to follow the format componentName.someUniqueIdWithInComponent
```
	<FormattedMessage
		id="app.hello_world"
		defaultMessage="Hello World!"
		description="Hello world header greeting"
	/>
```

The `defaultMessage` value will be used for your application’s default locale,
and the `description` attribute gives some context to the translator

#### Use HOC `injectIntl` for injecting the `intl` object
```
import {
	FormattedMessage, intlShape, injectIntl, defineMessages
} from 'react-intl';

const messages = defineMessages({
  helloWorld: {
    id: 'app.hello_world',
    defaultMessage: 'Hello World !',
  },
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          <FormattedMessage
            id="app.hello_world"
            defaultMessage="Hello World!"
            description="Hello world header greeting"
          />
        </h1>
        <h1>
        	{
        		this.props.intl.formatMessage(messages.helloWorld)
        	}
        </h1>
      </div>
    );
  }
}

export default injectIntl(App);
```