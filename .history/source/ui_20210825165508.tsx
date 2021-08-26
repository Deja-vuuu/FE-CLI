import React, { useCallback, useState } from 'react';
import { render, Box } from 'ink';
import ConfirmInput from 'ink-confirm-input';

const UnicornQuestion = () => {
	const [answer, setAnswer] = useState();
	const [value, setValue] = useState('');
	const handleSubmit = useCallback(submitValue => {
		if (submitValue === false) {
			// @ts-ignore
			setAnswer("You are heartless…");
			return;
		}
		// @ts-ignore
		setAnswer('You love unicorns!');
	}, [setAnswer]);

	return (
		<Box>
			Do you like unicorns? (Y/n)

			<ConfirmInput
				isChecked
				value={value}
				onChange={setValue}
				onSubmit={handleSubmit}
			/>

			{answer && answer}
		</Box>
	);
};

render(<UnicornQuestion />);
