import type { HistoryState, Action } from './type';
import { reducer } from './reducer';

export function historyReducer(
	state: HistoryState,
	action: Action,
): HistoryState {
	switch (action.type) {
		case 'UNDO': {
			if (state.past.length === 0) return state;

			const previous = state.past[state.past.length - 1];

			return {
				past: state.past.slice(0, -1),
				present: previous,
				future: [state.present, ...state.future],
			};
		}

		case 'REDO': {
			if (state.future.length === 0) return state;

			const next = state.future[0];

			return {
				past: [...state.past, state.present],
				present: next,
				future: state.future.slice(1),
			};
		}

		default: {
			const newPresent = reducer(state.present, action);

			return {
				past: [...state.past, state.present],
				present: newPresent,
				future: [],
			};
		}
	}
}
