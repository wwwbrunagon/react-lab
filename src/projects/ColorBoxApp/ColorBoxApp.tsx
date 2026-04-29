import ColorGrid from './ColorGrid';

export default function ColorBoxApp() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center">
			<div className="p-6">
				<h1 className="text-2xl font-semibold mb-4">Color Box</h1>
				<ColorGrid size={42} />
			</div>
		</div>
	);
}
