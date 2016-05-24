# Thing.js

A javascript library for working with things! Loosely inspired by [W3C web of things framework](https://github.com/w3c/web-of-things-framework), a thing is an javascript object that has:

* Properties
* Actions
* Events

A Thing is an extension of the [Node.js EventEmitter Class](https://nodejs.org/api/events.html), and contains useful methods for:

* Updating properties
* Calling actions
* Setting up event listeners
* Scheduling actions and events

For example of how this can quickly be used in an IoT stack, checkout [Grow.js](https://github.com/CommonGarden/Grow.js).

## Install
```bash
npm install Thing.js
```

### Example
```
var Thing = require('Thing.js');

var Light = new Thing({
  name: 'Light',
  id: 'light',
  description: 'An LED light with a basic on/off api.',
  state: 'off',
  actions: [
    {
      name: 'On',
      description: 'Turns the light on.',
      id: 'turn_light_on',
      schedule: 'at 9:00am',
      event: 'Light turned on',
      function: function () { // The implementation of the action
        Light.updateProperty('light', 'state', 'on'); // Update state
        console.log('Light on.');
      }
    },
    {
      name: 'off',
      id: 'turn_light_off',
      schedule: 'at 8:30pm',
      event: 'Light turned off',
      function: function () {
        Light.updateProperty('light', 'state', 'off'); // Update state
        console.log('Light off.');
      }
    }
  ],
  events: [
    {
      name: 'Light on listener',
      id: 'light_on_listener',
      on: 'turn_light_on', // Hook into an action.
      function: function () {
        console.log('this event listener is called when the light is turned on.');
      }
    }
  ]
});

Light.callAction('turn_light_on');
// logs 'Light on.'
// logs 'this event listener is called when the light is turned on.'

console.log(Light.state);
// logs 'on'

```

Please open issues or PRs with thoughts || suggestions || proposals.

# Developing

Code is written in ES6, and compiled using [rollup](https://github.com/rollup/rollup).

`npm run build` builds the library.

`npm run test` builds the library, and runs tests in the test folder.

The documentation is written in jsdoc, built using [Mr-Doc](https://mr-doc.github.io/), and kept on the [gh-pages branch of this repo](https://github.com/CommonGarden/Thing.js/tree/gh-pages).