// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './e2e/**/*.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'localhost://akquise.local',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function () { }
  },
  onPrepare() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
    jasmine.getEnv().addReporter(
      new SpecReporter({
        displayStacktrace: true,

        // Defaults: https://github.com/bcaudan/jasmine-spec-reporter#default-options
        // Configuration: https://github.com/bcaudan/jasmine-spec-reporter/blob/master/src/configuration.ts
        suite: {
          displayNumber: true,    // display each suite number (hierarchical)
        },
        spec: {
          displaySuccessful: true,
          displayPending: true,   // display each pending spec
          displayDuration: true,  // display each spec duration
        },
        summary: {
          displaySuccessful: false, // display summary of all successes after execution
          displayFailed: true,    // display summary of all failures after execution
          displayPending: false,   // display summary of all pending specs after execution
          displayDuration: true,
        },
      })
    );
  },
  // suites: {
  //   login: './e2e/login.e2e-spec.ts'
  // }
};
