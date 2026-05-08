import type { Todo, Action } from '../core/type';
import type { Dispatch } from 'react';
import { TodoItem } from './TodoItem';

type Props = {
	todos: Todo[];
	selected: Set<string>;
	dispatch: Dispatch<Action>;
};

export function TodoList({ todos, selected, dispatch }: Props) {
	return (
		<div>
			{todos.map((todo, index) => (
				<TodoItem
					key={todo.id}
					todo={todo}
					index={index}
					selected={selected.has(todo.id)}
					dispatch={dispatch}
				/>
			))}
		</div>
	);
}
