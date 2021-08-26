import React, { useState, useEffect } from 'react';
import { Text, Box, Spacer, Static, useStdout } from 'ink';
import TextInput from 'ink-text-input';



const App = () => {
	const [tests, setTests] = useState([]);
	const { write } = useStdout();

	useEffect(() => {
		// 向标准输出写入一条消息，在 Ink 的输出上方
		write('Hello from Ink to stdout\n');
	}, []);
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
	const [query, setQuery] = useState('');
	return (

		<>

			<Box>
				{/* <Box marginRight={1}>
					<Text>Enter your query:</Text>
				</Box>

				<TextInput value={query} onChange={setQuery} onSubmit={()=>{
					console.log(123);
					
				}}/> */}
				<Text color="green">
					<Spinner type="dots" />
				</Text>
				{' Loading'}
			</Box>

			{/* <Text color="green">I am green</Text>
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
			{/*   */}
		</>
	);
}

export default App