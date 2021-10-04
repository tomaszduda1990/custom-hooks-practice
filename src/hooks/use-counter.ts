import { useState, useEffect } from 'react';

export enum StateTypes {
	Increment = 1,
	Decrement = -1,
}

type Action = StateTypes.Increment | StateTypes.Decrement;

export const useCounter: (action: Action) => number = (action) => {
	const [counter, setCounter] = useState(0);
	useEffect(() => {
		const interval = setInterval(() => {
			setCounter((prevCount) => prevCount + action);
		}, 1000);
		return () => {
			clearInterval(interval);
		};
	}, [counter, action]);

	return counter;
};
