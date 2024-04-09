import { useState } from "react";
import { DataProps } from "../App";

interface TableProps {
	data: DataProps[];
	onDelete: (id: string) => void;
}
export default function Table({ data, onDelete }: TableProps) {
	const [category, setCategory] = useState("food");

	const payload = data.filter(
		(item) => item.category === category || category === "all"
	);
	const total = payload.reduce((acc, curr) => acc + curr.amount, 0);

	return (
		<div className="mt-5">
			<select
				onChange={(e) => setCategory(e.target.value)}
				defaultValue={"all"}
				className="form-select form-select-lg mb-3"
				aria-label="Large select example"
			>
				<option value="all">All</option>
				<option value="groceries">Groceries</option>
				<option value="utilities">Utilities</option>
				<option value="entertainment">Entertainment</option>
			</select>
			<table className="table table-bordered">
				<thead>
					<tr>
						<th scope="col">Description</th>
						<th scope="col">Amount</th>
						<th scope="col">Category</th>
					</tr>
				</thead>
				<tbody>
					{payload.map((item, index) => (
						<tr key={index}>
							<td>{item.description}</td>
							<td>${item.amount}</td>
							<td>{item.category.toUpperCase()}</td>
							<td>
								<button
									onClick={() => onDelete(item.id)}
									className="btn btn-danger"
								>
									DELETE
								</button>
							</td>
						</tr>
					))}
				</tbody>
				<tfoot>
					<tr>
						<td colSpan={2}>Total: ${total}</td>
					</tr>
				</tfoot>
			</table>
		</div>
	);
}
