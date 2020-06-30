#!/usr/bin/env node

import * as cli from '../src/cli.js';
import { brainCalcName } from '../src/games/brainCalcGame.js';
import runGame from '../src/index.js';

cli.welcomeMsg();
const userName = cli.askUserName();
cli.greetingUser(userName);

runGame(3, userName, brainCalcName);
