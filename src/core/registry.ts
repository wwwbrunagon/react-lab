import type { ProjectModule } from './types';

const modules = import.meta.glob('../projects/**/index.{ts,tsx}', {
	eager: true,
});

export const projects: ProjectModule[] = Object.values(modules)
	.map((mod: any) => {
		if (!mod?.default) {
			console.error('Missing default export in module:', mod);
			return null;
		}

		return mod.default;
	})
	.filter((project): project is ProjectModule => {
		if (!project) return false;

		const isValid = project.id && project.path && project.component;

		if (!isValid) {
			console.error('Invalid project structure:', project);
		}

		return isValid;
	});

/**
Scans your /projects folder
Imports every index.ts
Builds a runtime list 
*/
