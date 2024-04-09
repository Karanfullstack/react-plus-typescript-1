import { categories } from "../categories";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
	description: z.string().min(3).max(50),
	amount: z.number().min(0.01).max(100_000),
	category: z.enum(categories, {
		errorMap: () => ({
			message: "Please select a category",
		}),
	}),
});

type ExpanseFormData = z.infer<typeof schema>;
interface Props {
	onSubmit: (data: ExpanseFormData) => void;
}
export default function ExpanseForm({ onSubmit }: Props) {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isValid },
	} = useForm<ExpanseFormData>({
		resolver: zodResolver(schema),
	});
	return (
		<form
			onSubmit={handleSubmit((data) => {
				onSubmit(data);
				reset();
			})}
			className="mb-3"
		>
			<div className="mb-3">
				<label htmlFor="description" className="form-label">
					Description
				</label>
				<input
					{...register("description")}
					id="description"
					type="text"
					className="form-control"
				/>
				{errors.description && (
					<p className="text-danger">{errors.description.message}</p>
				)}
			</div>
			<div className="mb-3">
				<label htmlFor="amount" className="form-label">
					Amount
				</label>
				<input
					{...register("amount", { valueAsNumber: true })}
					id="amount"
					type="number"
					className="form-control"
				/>
				{errors.amount && (
					<p className="text-danger">{errors.amount.message}</p>
				)}
			</div>

			<div className="mb-3">
				<select {...register("category")} className="form-select">
					<option value="">All Categories</option>
					{categories.map((e) => (
						<option key={e} value={e}>
							{e}
						</option>
					))}
				</select>
				{errors.category && (
					<p className="text-danger">{errors.category.message}</p>
				)}
			</div>
			<button disabled={!isValid} className="btn btn-primary" type="submit">
				Submit
			</button>
		</form>
	);
}
