import TodoListApp from './TodoListApp';
import type { ProjectModule } from '../../core/types';

const project: ProjectModule = {
	id: 'todolistapp',
	title: 'TO DO LIST',
	description:
		'To do list application built with React and TypeScript that goes beyond basic CRUD functionality by supporting multi selection, item reordering, and undo/redo history. The focus of the project is to demonstrate scalable state management, predictable state transitions, and clean frontend architecture using a reducer based design.',
	path: '/projects/todolistapp',
	component: TodoListApp,
};

export default project;
