#!/usr/bin/env node
import React from 'react';
import { render } from 'ink';
import meow from 'meow';
import App from './ui';
import { Command } from 'commander';
const program = new Command();
program
	.option('-d, --debug', 'output extra debugging')
	.option('-s, --small', 'small pizza size')
	.option('-p, --pizza-type <type>', 'flavour of pizza');

program.parse(process.argv);

const options = program.opts();
if (options.debug) console.log(options);
console.log('pizza details:');
if (options.small) console.log('- small pizza size');
if (options.pizzaType) render(<App />);

render(<App />));