import React from 'react';

//Button component:
//  No state.
//  3 props:
//      -text: Text that will be displayed inside the button.
//      -handleState: will update parent's state based on the value prop.
//      -value: Number that will be added to the counter.

export default function Button(props) {
	return (
		<button onClick={() => props.handleState(props.value)}>{props.text}</button>
	);
}
