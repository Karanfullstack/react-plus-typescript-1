export default function ListGroup() {
	const items = [
		"An item",
		"A second item",
		"A third item",
		"A fourth item",
		"And a fifth one",
	];
	const ItemsLists = items.map((item) => (
		<li key={item} className="list-group-item">
			{item}
		</li>
	));

	return (
		<>
			<h1>List</h1>
			<ul className="list-group">{ItemsLists}</ul>
		</>
	);
}
