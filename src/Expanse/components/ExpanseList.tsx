interface Expanses {
	id: number;
	description: string;
	amount: number;
	category: string;
}

interface ExpanseListProps {
	expanses: Expanses[];
	onDelete: (id: number) => void;
}
export default function ExpanseList({ expanses, onDelete }: ExpanseListProps) {
	if (expanses.length === 0) return null;
	return (
		<section>
			<table className="table table-border">
				<thead>
					<tr>
						<th>Description</th>
						<th>Amount</th>
						<th>Category</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{expanses.map((item) => (
						<tr key={item.id}>
							<td>{item.description}</td>
							<td>{item.amount}</td>
							<td>{item.category}</td>
							<td>
								<button
									onClick={() => onDelete(item.id)}
									className="btn btn-outline-danger"
								>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
				<tfoot>
					<tr>
						<td>Total</td>
						<td>{expanses.reduce((acc, curr) => curr.amount + acc, 0)}</td>
						<td></td>
						<td></td>
					</tr>
				</tfoot>
			</table>
		</section>
	);
}
