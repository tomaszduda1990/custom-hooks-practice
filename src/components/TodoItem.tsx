import React from 'react';

interface Props {
	title: string;
}

const TodoItem = (props: Props) => {
	return <li>{props.title}</li>;
};

export default TodoItem;
