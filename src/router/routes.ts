export type AppRoute = {
	path: string;
	name: string;
	element: React.ReactNode;
};

import Home from '../pages/Home';
import ColorBoxApp from '../projects/ColorBoxApp';
import Form from '../projects/Form/FormApp';

export const routes: AppRoute[] = [
	{ path: '/', name: 'Home', element: typeof Home },
	{
		path: '/projects/colorboxapp',
		name: 'ColorBoxApp',
		element: typeof ColorBoxApp,
	},
	{ path: '/projects/form', name: 'Form', element: typeof Form },
];
