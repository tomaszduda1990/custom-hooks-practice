import { useState, useEffect, useCallback } from 'react';
interface Todo {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}
interface TodosState {
	error: string | null;
	todos: Todo[] | undefined;
	loading: boolean;
}
export const useGetTodos = () => {
	const [todos, setTodos] = useState<TodosState>();
	const apiCall = useCallback(async () => {
		try {
			setTodos((prevState) => ({
				...prevState,
				loading: true,
				error: null,
				todos: prevState?.todos,
			}));
			const res = await fetch('https://jsonplaceholder.typicode.com/todos');
			const data: Todo[] = await res.json();
			if (res.status === 200 && data) {
				setTodos((prevState) => ({
					...prevState,
					error: null,
					loading: false,
					todos: data,
				}));
			}
		} catch (error: any) {
			setTodos((prevState) => ({
				...prevState,
				error: error.message,
				loading: false,
				todos: prevState?.todos,
			}));
		}
	}, []);
	useEffect(() => {
		apiCall();
	}, [apiCall]);

	return todos;
};
