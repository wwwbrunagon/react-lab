import type { Dispatch } from 'react';
import type { Action, Todo } from '../core/type';

type Props = {
	todo: Todo;
	index: number;
	selected: boolean;
	dispatch: Dispatch<Action>;
};

export function TodoItem({ todo, index, selected, dispatch }: Props) {
	return (
		<div
			onClick={(e) =>
				dispatch({
					type: 'SELECT',
					id: todo.id,
					multi: e.metaKey || e.ctrlKey,
				})
			}
			className={`
        mb-2 flex items-center gap-3 rounded-lg border p-4 transition-colors
        ${
					selected
						? 'border-blue-500 bg-blue-100'
						: 'border-gray-200 bg-white hover:bg-gray-50'
				}
      `}
		>
			<input
				type="checkbox"
				checked={todo.completed}
				onClick={(e) => e.stopPropagation()}
				onChange={() =>
					dispatch({
						type: 'TOGGLE_TODO',
						id: todo.id,
					})
				}
				className="h-4 w-4 cursor-pointer"
			/>

			<span
				className={`
          flex-1 text-sm text-gray-800
          ${todo.completed ? 'text-gray-400 line-through' : ''}
        `}
			>
				{todo.title}
			</span>

			<div className="flex items-center gap-2">
				<button
					disabled={index === 0}
					onClick={(e) => {
						e.stopPropagation();
						dispatch({
							type: 'REORDER',
							from: index,
							to: index - 1,
						});
					}}
					className="
            rounded-md border border-gray-300 px-2 py-1 text-sm
            transition-colors hover:bg-gray-100
            disabled:cursor-not-allowed disabled:opacity-40
          "
				>
					↑
				</button>

				<button
					onClick={(e) => {
						e.stopPropagation();
						dispatch({
							type: 'REORDER',
							from: index,
							to: index + 1,
						});
					}}
					className="
            rounded-md border border-gray-300 px-2 py-1 text-sm
            transition-colors hover:bg-gray-100
          "
				>
					↓
				</button>

				<button
					onClick={(e) => {
						e.stopPropagation();
						dispatch({
							type: 'DELETE_TODO',
							id: todo.id,
						});
					}}
					className="
            rounded-md border border-red-300 px-3 py-1 text-sm text-red-600
            transition-colors hover:bg-red-50
          "
				>
					Delete
				</button>
			</div>
		</div>
	);
}
