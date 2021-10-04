import { useCounter, StateTypes } from '../hooks/use-counter';
import Card from './Card';

const BackwardCounter = () => {
	const counter = useCounter(StateTypes.Decrement);

	return <Card>{counter}</Card>;
};

export default BackwardCounter;
