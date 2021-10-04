import React, { useMemo } from 'react';
import { useGetTodos } from '../hooks/use-get-todos';
import TodoItem from './TodoItem';

const TodosContainer: React.FC = () => {
	const todos = useGetTodos();
	if (todos?.loading) return <p>Loading...</p>;
	if (!todos?.loading && todos?.error) return <p>{todos.error}</p>;
	if (!todos?.loading && todos?.todos)
		return (
			<ol>
				{todos.todos.map((todo) => {
					return <TodoItem key={todo.id} title={todo.title} />;
				})}
			</ol>
		);
	return <p>No results</p>;
};

export default TodosContainer;
