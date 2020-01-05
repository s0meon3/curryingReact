import React, { useState } from 'react';
import Button from './Button';

//Main component:
//  Functions and variables:
//      -handleState:
//          Curried function that updates the state based on the setState function, the current state and the value to be added.
//		-setCounter1State:
//			Uses handleState to create a function already set with setCounter1 (setState argument) and counter1 (state).
//  State:
//      -Three counters.
//  No props.
//  Content:
//      -3 paragraphs returning the counters.
//      -3 Button components referring to 1 counter.
//		-Other 2 Button components referring to the last 2 counters.

export default function Main() {
	const [counter1, setCounter1] = useState(0);
	const [counter2, setCounter2] = useState(0);
	const [counter3, setCounter3] = useState(0);

	const handleState = setState => state => value => {
		setState((state += value));
	};

	const setCounter1State = handleState(setCounter1)(counter1);

	return (
		<div>
			<p>Counter 1: {counter1}</p>
			<p>Counter 2: {counter2}</p>
			<p>Counter 3: {counter3}</p>

			<Button
				text='Add 1 to counter 1!'
				value={1}
				handleState={setCounter1State}
			/>
			<Button
				text='Add 2 to counter 1!'
				value={2}
				handleState={setCounter1State}
			/>
			<Button
				text='Add 3 to counter 1!'
				value={3}
				handleState={setCounter1State}
			/>
			{'\n'}
			<Button
				text='Add 2 to counter 2!'
				value={2}
				handleState={handleState(setCounter2)(counter2)}
			/>
			{'\n'}
			<Button
				text='Add 3 to counter 3!'
				value={3}
				handleState={handleState(setCounter3)(counter3)}
			/>
		</div>
	);
}
