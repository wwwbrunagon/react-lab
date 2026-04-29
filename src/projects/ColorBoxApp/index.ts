import Project1Page from './ColorBoxApp';
import type { ProjectModule } from '../../core/types';

const project: ProjectModule = {
	id: 'colorboxapp',
	title: 'Color Box App',
	description:
		'An app that shows the number of boxes which has different colors assigned to each of them. Each time the app loads different random colors are assigned. when a user clicks any of the boxes, it changes its color to some different random color that does not equal to its previous color value.',
	path: '/projects/colorboxapp',
	component: Project1Page,
};

export default project;
