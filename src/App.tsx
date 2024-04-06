import { useState } from "react";
function App() {
	const [isBug, setBug] = useState([
		{ id: 1, title: "bug1", fixed: false },
		{ id: 2, title: "bug2", fixed: false },
	]);

	const handelDrink = () => {
		setBug(isBug.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
	};
	return (
		<div className="App">
			{isBug.map((bug) => (
				<div key={bug.id}>
					<h3>{bug.title}</h3>
					<p>{bug.fixed ? "Fixed" : "Not Fixed"}</p>
				</div>
			))}
			<button onClick={handelDrink}>Button</button>
		</div>
	);
}

export default App;
