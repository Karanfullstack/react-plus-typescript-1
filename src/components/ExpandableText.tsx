import React, { type ReactNode, useState } from "react";

interface ExpandableTextProps {
	children: string;
	maxLength: number;
}
export default function ExpandableText({
	children,
	maxLength,
}: ExpandableTextProps) {
	const [isExpanded, setIsExpanded] = useState(false);
	return (
		<div>
			{isExpanded ? children : children.slice(0, maxLength)}

			<button onClick={() => setIsExpanded(!isExpanded)}>
				{isExpanded ? "Less.." : "Expand"}
			</button>
		</div>
	);
}
