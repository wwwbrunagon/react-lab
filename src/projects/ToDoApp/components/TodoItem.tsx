import type { Dispatch } from 'react';
import type { Action, Todo } from '../core/type';

type Props = {
	todo: Todo;
	index: number;
	total: number;
	selected: boolean;
	dispatch: Dispatch<Action>;
};

export function TodoItem({ todo, index, total, selected, dispatch }: Props) {
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
        flex items-center gap-3 rounded-xl border p-4 shadow-sm transition-all
        ${
					selected
						? 'border-blue-500 bg-blue-50 shadow-blue-100'
						: 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
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
				className="h-5 w-5 cursor-pointer rounded border-slate-300 text-blue-600 focus:ring-blue-500"
			/>

			<span
				className={`
          flex-1 break-words text-sm font-medium text-slate-800
          ${todo.completed ? 'text-slate-400 line-through' : ''}
        `}
			>
				{todo.title}
			</span>

			<div className="flex shrink-0 items-center gap-2">
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
            flex h-9 w-9 items-center justify-center rounded-lg border border-slate-300 text-sm font-semibold text-slate-600
            transition-colors hover:bg-slate-100
            disabled:cursor-not-allowed disabled:opacity-40
					"
					aria-label="Move up"
				>
					↑
				</button>

				<button
					disabled={index === total - 1}
					onClick={(e) => {
						e.stopPropagation();
						dispatch({
							type: 'REORDER',
							from: index,
							to: index + 1,
						});
					}}
					className="
            flex h-9 w-9 items-center justify-center rounded-lg border border-slate-300 text-sm font-semibold text-slate-600
            transition-colors hover:bg-slate-100
            disabled:cursor-not-allowed disabled:opacity-40
					"
					aria-label="Move down"
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
            rounded-lg border border-red-200 px-3 py-2 text-sm font-semibold text-red-600
            transition-colors hover:bg-red-50
          "
				>
					Delete
				</button>
			</div>
		</div>
	);
}
