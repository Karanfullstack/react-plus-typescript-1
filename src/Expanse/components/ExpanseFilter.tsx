
interface ExpanseFilterProps {
	onSelectCategory: (category: string) => void;
}
export default function ExpanseFilter({ onSelectCategory }: ExpanseFilterProps) {
	return (
		<select className="form-select" onChange={(e)=> onSelectCategory(e.target.value)}>
			<option value="">All Categories</option>
			<option value="Groceries">Groceries</option>
			<option value="Utilities">Utilities</option>
			<option value="Entertainment">Entertainment</option>
		</select>
	);
}
