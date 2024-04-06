import { useState } from "react";

interface Props {
	items: string[];
	heading: string;
}

export default function ListGroup({items, heading}:Props) {
	const [activeIndex, setActiveIndex] = useState<number>(-1);


	// Event handler
	const handelClick = (index: number) => setActiveIndex(index);
	const ItemsLists = items.map((item, index) => (
		<li
			key={item}
			onClick={() => handelClick(index)}
			className={`${
				activeIndex === index && "list-group-item active"
			} list-group-item `}
		>
			{item}
		</li>
	));

	return (
		<>
			<h1>{heading}</h1>
			{ItemsLists && <ul className="list-group">{ItemsLists}</ul>}
			{ItemsLists.length === 0 && <p>No items</p>}
		</>
	);
}
