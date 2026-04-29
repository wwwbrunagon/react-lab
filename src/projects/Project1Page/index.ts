import Project1Page from './Project1Page';
import type { ProjectModule } from '../../core/types';

const project: ProjectModule = {
	id: 'project-1',
	title: 'Project 1',
	description: 'First experiment',
	path: '/projects/project-1',
	component: Project1Page,
};

export default project;
