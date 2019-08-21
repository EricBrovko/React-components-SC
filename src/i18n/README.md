## React-intl

#### Flow

1. Create a new component 
2. Create a directory or a file called `messages`
3. Use `defineMessages` for definning new messages
4. Run `yarn build:langs` for getting all messages
5. Move new messages to `src/i18/lang` directory

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