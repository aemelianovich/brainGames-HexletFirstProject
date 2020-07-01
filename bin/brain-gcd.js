#!/usr/bin/env node

import * as cli from '../src/cli.js';
import { gameName } from '../src/games/brainGCDGame.js';
import runGame from '../src/index.js';

cli.welcomeMsg();
const userName = cli.askUserName();
cli.greetingUser(userName);

runGame(3, userName, gameName);
