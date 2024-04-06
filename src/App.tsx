import ListGroup from "./components/ListGroup";

function App() {
	const items = [
		"An item",
		"A second item",
		"A third item",
		"A fourth item",
		"And a fifth one",
	];
const onSelectItem	= (item: string) => console.log(item);
	return (
		<div className="App">
			<ListGroup items={items} heading="Countries" onSelectItem={onSelectItem} />
		</div>
	);
}

export default App;
