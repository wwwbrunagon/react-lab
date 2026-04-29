import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './main.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<div className="min-h-screen bg-gray-950 text-gray-100">
			<div className="max-w-5xl mx-auto px-6 py-10">
				<App />
			</div>
		</div>
	</StrictMode>,
);
