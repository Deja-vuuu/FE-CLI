import React from 'react';
import { render } from 'ink';
import meow from 'meow';
import App from './app';

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
			// alias: 'n'
		}
	}
});
console.log(cli);

render(<App />);
