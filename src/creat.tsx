import React, { useState, useEffect } from 'react';
import { Text, Box, Spacer, Static, useStdout } from 'ink';
import fs from 'fs-extra'
import path from 'path'
import TextInput from 'ink-text-input';
import Spinner from 'ink-spinner';
import SelectInput from 'ink-select-input';
import BigText from 'ink-big-text';
import Gradient from 'ink-gradient';
import  { useInput }  from  'ink' ;

const Creat = ({name,options}) => {
	const [tests, setTests] = useState([]);
	const { write } = useStdout();
    useInput ( ( input ,  key )  =>  { 
		if  ( input  ===  'z'  && key.ctrl === true)  { 
			// 退出程序
            process.exit()
		}

		if  ( key . leftArrow )  { 
			// 按下左箭头键
		} 
	} ) ;
	useEffect(() => {
        const cwd  = process.cwd();
        const targetAir  = path.join(cwd, name)
        if(fs.pathExistsSync(targetAir)){

        }else{
            fs.emptyDir(name,()=>{
                console.log('name',name)
            })
        }
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
	const handleSelect = item => {
        console.log('select,',item)
        fs.emptyDir(item.label,()=>{
            console.log('name',item.label)
        })
		// `item` = { label: 'First', value: 'first' }
	};

	const items = [
		{
			label: 'First',
			value: 'first1'
		},
		{
			label: 'Second',
			value: 'second'
		},
		{
			label: 'Third',
			value: 'third'
		}
	];
	return (

		<>
			{/* <Gradient name="rainbow">
				<BigText text="POP-MART" />
			</Gradient> */}
			<SelectInput items={items} onSelect={handleSelect} />

			<Text>
				{/* <Box marginRight={1}>
					<Text>Enter your query:</Text>
				</Box>

				<TextInput value={query} onChange={setQuery} onSubmit={()=>{
					console.log(123);
					
					
				}}/> */}

				{/* <Text color="green">
					<Spinner type="dots" />
				</Text> */}
				{/* {' Loading'} */}
			</Text>
			<Text color="#ffffff">I am white</Text>
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

export default Creat