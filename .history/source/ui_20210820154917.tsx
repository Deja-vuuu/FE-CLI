import React from 'react';
import { Text, Box } from 'ink';

const App = () => (
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
	</>
);

export default App