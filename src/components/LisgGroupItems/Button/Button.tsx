import styles from "./Button.module.css";

interface ButtonProps {
	children: string;
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
			<button
				type="button"
				onClick={onClick}
				className={[styles.btn, styles["btn-" + color]].join(" ")}
			>
				{children}
			</button>
		</div>
	);
}
