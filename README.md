# automate the purchase flow using WebdriverIO
Automated test framework for the Sauce Demo website (https://www.saucedemo.com/) to automate the purchase flow using WebdriverIO.

This repository will contain the solution for the second task.

Before trying to run the test cases you need to setup your envirment first Steps to do so:

***Note: you must be running as administrator since packages will be installed globably

1)Install nodejs latest version

2)Go to the root folder of the project

3)Run "npm install"

4)Run "npm run wdio" to run all the tests

# run all the tests:

npx wdio run ./wdio.conf.js

# run a specific test suite:

npx wdio wdio.conf.js --mochaOpts.grep "Validate Split Configuration"

# define suites in your config file and run just the test files defined by in a suite:

npx wdio run ./wdio.conf.js --suite purchaseProduct

# Github Action Workflow as CI/CD pipeline 

The workflow file is located at .github/workflows/main.yml. It is triggered automatically on each push to the main branch. The workflow installs node modules and runs the tests using the specified command. Check the workflow status and output in the Actions tab of the repository on GitHub. 





