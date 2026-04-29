type Props = {
	color: string;
	onClick: () => void;
};

export default function ColorBox({ color, onClick }: Props) {
	return (
		<div
			onClick={onClick}
			className="aspect-square cursor-pointer transition-all duration-200 hover:scale-105"
			style={{ backgroundColor: color }}
		/>
	);
}
