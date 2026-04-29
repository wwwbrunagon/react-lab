import { useState } from 'react';
import ColorBox from './ColorBox';

type Props = {
	size: number;
};

const randomColor = (): string => {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, '0')}`;
};

const generateDifferentColor = (prev: string): string => {
	let next = randomColor();

	while (next === prev) next = randomColor();

	return next;
};

const generateInitialColors = (count: number): string[] => {
	return Array.from({ length: count }, randomColor);
};

export default function ColorGrid({ size }: Props) {
	const [colors, setColors] = useState<string[]>(generateInitialColors(size));

	const handleClick = (index: number) => {
		setColors((prev) => {
			const next = [...prev];
			next[index] = generateDifferentColor(prev[index]);
			return next;
		});
	};

	return (
		<div className="grid grid-cols-6 w-[600px]">
			{colors.map((color, i) => (
				<ColorBox key={i} color={color} onClick={() => handleClick(i)} />
			))}
		</div>
	);
}
