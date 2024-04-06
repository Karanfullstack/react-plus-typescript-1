import { type ReactNode } from "react";

interface ButtonProps {
	children: ReactNode;
	color?: "primary" | "secondary" | "danger" | "warning" | "success";
	onClick: () => void;
}
export default function ({
	children,
	onClick,
	color = "primary",
}: ButtonProps) {
	return (
		<div>
			<button type="button" onClick={onClick} className={"btn btn-" + color}>
				{children}
			</button>
		</div>
	);
}
