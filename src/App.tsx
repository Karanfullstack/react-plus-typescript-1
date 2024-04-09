import { useState } from "react";
import ExpanseList from "./Expanse/components/ExpanseList";

function App() {
	const [expanses, setExpanses] = useState([
		{ id: 1, description: "Car 1", amount: 294.67, category: "Insurance" },
		{ id: 2, description: "Car 2", amount: 294.67, category: "Insurance" },
		{ id: 3, description: "Car 3", amount: 294.67, category: "Insurance" },
	]);
	return (
		<div>
			<ExpanseList
				expanses={expanses}
				onDelete={(id) =>
					setExpanses(expanses.filter((item) => item.id !== id))
				}
			/>
		</div>
	);
}

export default App;
