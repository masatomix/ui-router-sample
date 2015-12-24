'use strict';

//var port = require('../port.json');

module.exports = function (grunt) {

  grunt.config('stubby', {
    stubsServer: {
      // note the array collection instead of an object
      options: {
        callback: function (server, options) {
          server.get(1, function (err, endpoint) {
            if (!err) {
              console.log(endpoint);
            }
          });
        },
        stubs: 3000,
        tls: 8443,
        admin: 8010,
        location: '0.0.0.0',
        persistent: true
      },
      files: [{
        src: ['mocks/stubby/**/*.yaml']
      }]
    }
  });

};
