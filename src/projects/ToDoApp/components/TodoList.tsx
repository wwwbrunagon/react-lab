import type { Todo, Action } from '../core/type';
import type { Dispatch } from 'react';
import { TodoItem } from './TodoItem';

type Props = {
	todos: Todo[];
	selected: Set<string>;
	dispatch: Dispatch<Action>;
};

export function TodoList({ todos, selected, dispatch }: Props) {
	if (todos.length === 0) {
		return (
			<section className="rounded-xl border border-dashed border-slate-300 bg-slate-50 px-6 py-12 text-center">
				<div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-xl font-semibold text-blue-700">
					+
				</div>
				<h2 className="text-lg font-semibold text-slate-900">
					No tasks yet
				</h2>
				<p className="mt-2 text-sm text-slate-500">
					Add your first task to start organizing the list.
				</p>
			</section>
		);
	}

	return (
		<section className="space-y-3">
			{todos.map((todo, index) => (
				<TodoItem
					key={todo.id}
					todo={todo}
					index={index}
					total={todos.length}
					selected={selected.has(todo.id)}
					dispatch={dispatch}
				/>
			))}
		</section>
	);
}
