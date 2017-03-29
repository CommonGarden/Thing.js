const Thing = require('../../lib/Thing.js');
const coap = require('coap');

const Light = new Thing({
  properties: {
    state: null,
  },

  start: function () {
    console.log('Thing initialized, this code runs first');

    // Things are an extension of the node EventEmitter class 
    // Thus have the same API. Here we register a listener.
    this.on('turn_light_on', function() {
      console.log('Light turned on.')
    });
  },

  turn_on: function () {
    console.log('light on');
    Light.set('state', 'on');
  },

  turn_off: function () {
    console.log('light off');
    Light.set('state', 'off');
  }
});

Light.listen();
