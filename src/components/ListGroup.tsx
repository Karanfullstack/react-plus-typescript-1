import { MouseEvent } from "react";

type Items = string;
export default function ListGroup() {
	const items: Items[] = [
		"An item",
		"A second item",
		"A third item",
		"A fourth item",
		"And a fifth one",
	];

	// Event handler
	const handelClick = (item:Items) => console.log(item);
	const ItemsLists = items.map((item, index) => (
		<li key={item} onClick={()=> handelClick(item)} className="list-group-item">
			{item}
		</li>
	));

	return (
		<>
			<h1>List</h1>
			{ItemsLists && <ul className="list-group">{ItemsLists}</ul>}
			{ItemsLists.length === 0 && <p>No items</p>}
		</>
	);
}
