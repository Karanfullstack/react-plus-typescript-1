import { useState } from "react";

interface ExpandableTextProps {
	children: string;
	maxLength: number;
}
export default function ExpandableText({
	children,
	maxLength,
}: ExpandableTextProps) {
	const [isExpanded, setIsExpanded] = useState(false);
	const text = isExpanded ? children : children.substring(0, maxLength);
	return (
		<div>
			{text}...
			<button onClick={() => setIsExpanded(!isExpanded)}>
				{isExpanded ? "Less.." : "Expand"}
			</button>
		</div>
	);
}
