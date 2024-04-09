import { categoriesf } from "../categories";
interface ExpanseFilterProps {
	onSelectCategory: (category: string) => void;
}
export default function ExpanseFilter({
	onSelectCategory,
}: ExpanseFilterProps) {
	return (
		<select
			className="form-select"
			onChange={(e) => onSelectCategory(e.target.value)}
		>
			<option value="">All Categories</option>
			{categories.map((e) => (
				<option key={e} value={e}>
					{e}
				</option>
			))}
		</select>
	);
}
