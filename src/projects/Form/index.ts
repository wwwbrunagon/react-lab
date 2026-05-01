import Form from '../Form/FormApp';
import type { ProjectModule } from '../../core/types';

const project: ProjectModule = {
	id: 'formapp',
	title: 'Form',
	description:
		'Creating a Form in React includes the use of TSX elements to build interactive interfaces for user inputs. We will be using HTML elements to create different input fields and functional component with useState to manage states and handle inputs.',
	path: '/projects/form',
	component: Form,
};

export default project;
