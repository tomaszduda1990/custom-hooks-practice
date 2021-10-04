import { useState, useEffect } from 'react';

export enum StateTypes {
	Increment = 'increment',
	Decrement = 'decrement',
}

type Action = StateTypes.Increment | StateTypes.Decrement;

export const useCounter: (action: Action) => number = (action) => {
	const [counter, setCounter] = useState(0);
	useEffect(() => {
		if (action === StateTypes.Increment) {
			setTimeout(() => {
				setCounter((prevCount) => prevCount + 1);
			}, 1000);
		} else if (action === StateTypes.Decrement) {
			setTimeout(() => {
				setCounter((prevCount) => prevCount - 1);
			}, 1000);
		}
	}, [counter, action]);

	return counter;
};
