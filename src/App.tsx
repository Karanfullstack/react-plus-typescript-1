import { useState } from "react";
import ExpanseList from "./Expanse/components/ExpanseList";
import ExpanseFilter from "./Expanse/components/ExpanseFilter";
import ExpanseForm from "./Expanse/components/ExpanseForm";

function App() {
	const [selectedCategory, setSelectedCategory] = useState("");

	const [expanses, setExpanses] = useState([
		{ id: 1, description: "Car 1", amount: 294.67, category: "Groceries" },
		{ id: 2, description: "Car 2", amount: 294.67, category: "Groceries" },
		{ id: 3, description: "Car 3", amount: 294.67, category: "Groceries" },
	]);

	const data = selectedCategory
		? expanses.filter((item) => item.category === selectedCategory)
		: expanses;

	return (
		<div>
			<div className="mb-3">
				<ExpanseForm />
			</div>
			<div className="mb-3">
				<ExpanseFilter
					onSelectCategory={(category) => setSelectedCategory(category)}
				/>
			</div>
			<ExpanseList
				expanses={data}
				onDelete={(id) =>
					setExpanses(expanses.filter((item) => item.id !== id))
				}
			/>
		</div>
	);
}

export default App;
