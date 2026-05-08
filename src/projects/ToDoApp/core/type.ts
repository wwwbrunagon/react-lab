export type Todo = {
	id: string;
	title: string;
	completed: boolean;
};

export type State = {
	todos: Todo[];
	selectedIds: Set<string>;
};

export type HistoryState = {
	past: State[];
	present: State;
	future: State[];
};

export type Action =
	| { type: 'ADD_TODO'; title: string }
	| { type: 'TOGGLE_TODO'; id: string }
	| { type: 'DELETE_TODO'; id: string }
	| { type: 'SELECT'; id: string; multi?: boolean }
	| { type: 'CLEAR_SELECTION' }
	| { type: 'REORDER'; from: number; to: number }
	| { type: 'UNDO' }
	| { type: 'REDO' };
