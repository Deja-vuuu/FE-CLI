#!/usr/bin/env node
import React from 'react';
import {render} from 'ink';
import meow from 'meow';
import App from './ui';

const cli = meow(`
	Usage
	  $ POP

	Options
		--name  Your name

	Examples
	  $ POP --name=Jane
	  Hello, Jane
`, {
	flags: {
		name: {
			type: 'string',
			alias: 'n'
		}
	}
});

render(<App name={cli.flags.name}/>);
