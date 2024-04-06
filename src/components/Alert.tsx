import  { type ReactNode } from "react";

interface AlertProps {
	children: ReactNode;
}
export default function Alert({ children }: AlertProps) {
	return <div className="alert alert-primary">{children}</div>;
}
