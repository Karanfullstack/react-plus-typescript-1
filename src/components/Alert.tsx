import { type ReactNode } from "react";

interface AlertProps {
	children: ReactNode;
	onClose?: () => void;
}
export default function Alert({ children, onClose }: AlertProps) {
	return (
		<div className="alert alert-warning alert-dismissible fade show">
			<strong>{children}</strong>
			<button
				type="button" onClick={onClose}
				className="btn-close"
				data-bs-dismiss="ale"
			></button>f
		</div>
	);
}
