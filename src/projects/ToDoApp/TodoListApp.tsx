import { useTodos } from './hooks/useTodos';
import { TodoList } from './components/TodoList';
import { Toolbar } from './components/Toolbar';

export default function TodoListApp() {
	const { state, dispatch, canUndo, canRedo } = useTodos();

	return (
		<div style={{ maxWidth: 500, margin: '40px auto' }}>
			<Toolbar dispatch={dispatch} canUndo={canUndo} canRedo={canRedo} />

			<TodoList
				todos={state.todos}
				selected={state.selectedIds}
				dispatch={dispatch}
			/>
		</div>
	);
}
