import React, { useState, useEffect } from 'react';
import { Text, Box, Spacer, Static, useStdout } from 'ink';
import TextInput from 'ink-text-input';
import Spinner from 'ink-spinner';
import SelectInput from 'ink-select-input';
import BigText from 'ink-big-text';
import Gradient from 'ink-gradient';

const App = () => {
	return (

		<>
			<Gradient name="rainbow">
				<BigText text="POP-MART" />
			</Gradient>
			
		</>
	);
}

export default App