# JavaScript Unit Testing

## Overview
* This is a simple project to showcase Unit Tests in JavaScript using Mocha/Chai and Stubs
* **Skills:** Unit Testing using Stub
* **Languages:** JavaScript
* **SCM:** Git
* **Build/Dependency Management:** Mocha/npm/sinon
* **Assertion Lib:** Chai, Expect, Should
* **CI/CD:** CircleCI  [![CircleCI](https://circleci.com/gh/irfanalinoor/javascript-unit-tests-mocha.svg?style=svg)](https://circleci.com/gh/irfanalinoor/javascript-unit-tests-mocha)


## Setup
- Download [javascript-unit-tests-mocha](https://github.com/irfanalinoor/javascript-unit-tests-mocha) project repo from GitHub
- Install latest [Node.JS](https://nodejs.org/en/download/)
- Install [Git](https://git-scm.com/downloads)
- Install [Visual Studio Code](https://code.visualstudio.com/download)
- Navigate to Project Directory in Terminal
- Run `npm install`
- Run App `npm start` (dry run)
- Run Unit Tests `npm test`

## Unit Tests 
    Unit Test for UserController Class
    When ISOLATED (Stubbed)
      ✓ Verify Keys of 'getAll' JSON Output - Stubbed
      ✓ Verify 'Users' is an Array in 'getAll' JSON Output - Stubbed
      ✓ Verify 'id' is NUMBER in 'getAll' JSON Output - Stubbed
      ✓ Verify 'username' is STRING in 'getAll' JSON Output - Stubbed
      ✓ Verify 'email' is STRING in 'getAll' JSON Output - Stubbed 

    Unit Test for UserService Class
    When ISOLATED (Stubbed)
      ✓ Verify Keys of 'getAll' JSON Output - Stubbed
      ✓ Verify 'Users' is an Array in 'getAll' JSON Output - Stubbed
      ✓ Verify 'id' is NUMBER in 'getAll' JSON Output - Stubbed
      ✓ Verify 'username' is STRING in 'getAll' JSON Output - Stubbed
      ✓ Verify 'email' is STRING in 'getAll' JSON Output - Stubbed

## Continuous Integration

- CircleCI - Config.yml

version: 2
jobs:
  build:
    working_directory: ~/javascript-unit-tests-mocha
    docker:
      - image: circleci/node:8.0
      - image: mongo:3.4.4
    steps:
      - run:
          name: "Checking NodeJs + NPM Version"
          command: |
            node --version
            npm --version
      - checkout
      - restore_cache:
          key: dependency-cache-{{ checksum "package.json" }}
      - run:
          name: Install NPM Packages
          command: 'sudo npm install'
      - run:
          name: NPM Start
          command: 'npm start'
      - run:
          name: Run Unit Tests
          command: 'npm test'
