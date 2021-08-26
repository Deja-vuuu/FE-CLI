import React, { useState, useEffect } from 'react';
import { Text, Box, Spacer, Static, useStdout } from 'ink';

const App = () => {
	const [tests, setTests] = useState([]);

	useEffect(() => {
		let completedTests = 0;
		let timer;

		const run = () => {
			// Fake 10 completed tests
			if (completedTests++ < 10) {
				setTests(previousTests => [
					...previousTests,
					{
						id: previousTests.length,
						title: `Test #${previousTests.length + 1}`
					}
				]);

				setTimeout(run, 100);
			}
		};

		run();

		return () => {
			clearTimeout(timer);
		};
	}, []);

	return (

		<>
			<Text color="green">I am green</Text>
			<Text color="black" backgroundColor="white">
				I am black on white
			</Text>
			<Text color="#ffffff">I am white</Text>
			<Text bold>I am bold</Text>
			<Text italic>I am italic</Text>
			<Text underline>I am underline</Text>
			<Text strikethrough>I am strikethrough</Text>
			<Text inverse>I am inversed</Text>
			<Box width={7}>
				<Text wrap="truncate-start">Hello World</Text>
			</Box>

			<Box width={7}>
				<Text wrap="truncate-middle">Hello World</Text>
			</Box>
			<Box width={7}>
				<Text wrap="truncate">Hello World</Text>
			</Box>
			<Box borderStyle="round" borderColor="green">
				<Text>Green Rounded Box</Text>
			</Box>
			<Box>
				<Text>Left</Text>
				<Spacer />
				<Text>Right</Text>
			</Box>
			<Static items={tests}>
				{test => (
					<Box key={test.id}>
						<Text color="green">✔ {test.title}</Text>
					</Box>
				)}
			</Static>

			{/* This part keeps updating as state changes */}
			<Box marginTop={1}>
				<Text dimColor>Completed tests: {tests.length}</Text>
			</Box>
		</>
	);
}

export default App