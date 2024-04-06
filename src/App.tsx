import ListGroup from "./components/ListGroup";

function App() {
	const items = [
		"An item",
		"A second item",
		"A third item",
		"A fourth item",
		"And a fifth one",
	];
	return (
		<div className="App">
			<ListGroup items={items} heading="Countries" />
		</div>
	);
}

export default App;
