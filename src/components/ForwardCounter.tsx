import { useCounter, StateTypes } from '../hooks/use-counter';
import Card from './Card';

const ForwardCounter = () => {
	const counter = useCounter(StateTypes.Increment);

	return <Card>{counter}</Card>;
};

export default ForwardCounter;
