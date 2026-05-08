import { useReducer } from 'react';
import { historyReducer } from '../core/history';
import type { HistoryState } from '../core/type';

const initialState: HistoryState = {
	past: [],
	present: {
		todos: [],
		selectedIds: new Set(),
	},
	future: [],
};

export function useTodos() {
	const [state, dispatch] = useReducer(historyReducer, initialState);

	return {
		state: state.present,
		dispatch,
		canUndo: state.past.length > 0,
		canRedo: state.future.length > 0,
	};
}
