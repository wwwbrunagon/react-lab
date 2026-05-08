import { useTodos } from './hooks/useTodos';
import { TodoList } from './components/TodoList';
import { Toolbar } from './components/Toolbar';

export default function TodoListApp() {
	const { state, dispatch, canUndo, canRedo } = useTodos();
	const totalTodos = state.todos.length;
	const completedTodos = state.todos.filter((todo) => todo.completed).length;
	const pendingTodos = totalTodos - completedTodos;

	return (
		<main className="mx-auto mt-8 min-h-[calc(100vh-5rem)] max-w-3xl rounded-2xl bg-white px-5 py-6 text-slate-950 shadow-2xl shadow-slate-950/20 sm:px-8 sm:py-8">
			<header className="mb-8 flex flex-col gap-5 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
				<div>
					<p className="text-sm font-medium uppercase tracking-[0.18em] text-blue-600">
						React Lab
					</p>
					<h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
						To-do list
					</h1>
					<p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
						Organize your tasks, select items, and track your daily progress in
						a simple list.
					</p>
				</div>

				<div className="grid grid-cols-3 gap-2 text-center sm:min-w-72">
					<div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
						<p className="text-lg font-semibold text-slate-950">{totalTodos}</p>
						<p className="text-xs font-medium text-slate-500">Total</p>
					</div>
					<div className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-2">
						<p className="text-lg font-semibold text-amber-700">
							{pendingTodos}
						</p>
						<p className="text-xs font-medium text-amber-700">Pending</p>
					</div>
					<div className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2">
						<p className="text-lg font-semibold text-emerald-700">
							{completedTodos}
						</p>
						<p className="text-xs font-medium text-emerald-700">Done</p>
					</div>
				</div>
			</header>

			<Toolbar dispatch={dispatch} canUndo={canUndo} canRedo={canRedo} />

			<TodoList
				todos={state.todos}
				selected={state.selectedIds}
				dispatch={dispatch}
			/>
		</main>
	);
}
