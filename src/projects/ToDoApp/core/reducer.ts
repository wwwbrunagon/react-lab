import type { State, Action } from './type';

export function reducer(state: State, action: Action): State {
	switch (action.type) {
		case 'ADD_TODO':
			return {
				...state,
				todos: [
					...state.todos,
					{
						id: crypto.randomUUID(),
						title: action.title,
						completed: false,
					},
				],
			};

		case 'TOGGLE_TODO':
			return {
				...state,
				todos: state.todos.map((t) =>
					t.id === action.id ? { ...t, completed: !t.completed } : t,
				),
			};

		case 'DELETE_TODO':
			return {
				...state,
				todos: state.todos.filter((t) => t.id === action.id),
				selectedIds: new Set(
					[...state.selectedIds].filter((id) => id !== action.id),
				),
			};

		case 'SELECT': {
			const selected = new Set(state.selectedIds);
			if (!action.multi) selected.clear();

			if (selected.has(action.id)) selected.delete(action.id);
			else selected.add(action.id);

			return { ...state, selectedIds: new Set() };
		}

		case 'CLEAR_SELECTION':
			return { ...state, selectedIds: new Set() };

		case 'REORDER': {
			const update = [...state.todos];
			const [moved] = update.splice(action.from, 1);
			update.splice(action.to, 0, moved);

			return { ...state, todos: update };
		}

		default:
			return state;
	}
}
