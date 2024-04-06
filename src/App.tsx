import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
	return (
		<div className="App">
			<Alert>
				<Button color="danger" onClick={()=> console.log("clicked")}>my button</Button>
			</Alert>
		</div>
	);
}

export default App;
