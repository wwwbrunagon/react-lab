export type Project = {
	id: string;
	title: string;
	description: string;
	path: string;
};

export const projects: Project[] = [
	{
		id: 'project-1',
		title: 'Project 1',
		description: 'Short description of the project',
		path: '/project-1',
	},
	{
		id: 'project-2',
		title: 'Project 2',
		description: 'Short description of the project',
		path: '/project-2',
	},
];
