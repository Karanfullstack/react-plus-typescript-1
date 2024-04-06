import Like from "./Like";

function App() {
	return (
		<div className="App">
			<Like onClick={() => console.log("clicked")} />
		</div>
	);
}

export default App;
