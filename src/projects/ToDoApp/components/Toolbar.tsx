import { useState } from 'react';
import type { Dispatch } from 'react';
import type { Action } from '../core/type';

type Props = {
	dispatch: Dispatch<Action>;
	canUndo: boolean;
	canRedo: boolean;
};

export function Toolbar({ dispatch, canUndo, canRedo }: Props) {
	const [input, setInput] = useState('');

	return (
		<section className="mb-6 space-y-3">
			<div className="flex flex-col gap-3 sm:flex-row">
				<input
					value={input}
					onChange={(e) => setInput(e.target.value)}
					onKeyDown={(e) => {
						if (e.key !== 'Enter' || !input.trim()) return;
						dispatch({ type: 'ADD_TODO', title: input.trim() });
						setInput('');
					}}
					placeholder="Add a new task"
					className="min-h-12 flex-1 rounded-lg border border-slate-300 bg-white px-4 text-sm text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
				/>

				<button
					onClick={() => {
						if (!input.trim()) return;
						dispatch({ type: 'ADD_TODO', title: input.trim() });
						setInput('');
					}}
					className="min-h-12 rounded-lg bg-blue-600 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-100"
				>
					Add
				</button>
			</div>

			<div className="flex flex-wrap gap-2">
				<button
					disabled={!canUndo}
					onClick={() => dispatch({ type: 'UNDO' })}
					className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
				>
					Undo
				</button>

				<button
					disabled={!canRedo}
					onClick={() => dispatch({ type: 'REDO' })}
					className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
				>
					Redo
				</button>

				<button
					onClick={() => dispatch({ type: 'CLEAR_SELECTION' })}
					className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
				>
					Clear selection
				</button>
			</div>
		</section>
	);
}
