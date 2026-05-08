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
		<div style={{ marginBottom: 16 }}>
			<input
				value={input}
				onChange={(e) => setInput(e.target.value)}
				placeholder="Add todo"
			/>

			<button
				onClick={() => {
					if (!input.trim()) return;
					dispatch({ type: 'ADD_TODO', title: input });
					setInput('');
				}}
			>
				Add
			</button>

			<button disabled={!canUndo} onClick={() => dispatch({ type: 'UNDO' })}>
				Undo
			</button>

			<button disabled={!canRedo} onClick={() => dispatch({ type: 'REDO' })}>
				Redo
			</button>

			<button onClick={() => dispatch({ type: 'CLEAR_SELECTION' })}>
				Clear Selection
			</button>
		</div>
	);
}
