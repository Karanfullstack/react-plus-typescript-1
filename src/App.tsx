import { useState } from "react";
import ExpanseForm from "./components/ExpanseForm/ExpanseForm";
import Table from "./Table/Table";

export interface DataProps {
	readonly id: string;
	description: string;
	amount: number;
	category: string;
}
function App() {
	const [data, setData] = useState<DataProps[]>([]);

	const addData = (data: DataProps) => {
		const Data: DataProps = {
			id: Date.now().toString(),
			description: data.description,
			amount: data.amount,
			category: data.category,
		};
		setData((prev) => [...prev, Data]);
	};

	const onDelete = (id: string) => {
		const newData = data.filter((item) => item.id !== id);
		setData(newData);
	};
	return (
		<div>
			<ExpanseForm addData={addData} />
			<Table data={data} onDelete={onDelete} />
		</div>
	);
}

export default App;
