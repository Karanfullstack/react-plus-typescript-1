import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DataProps } from "../../App";

const schema = z.object({
	description: z.string().min(3, { message: "Character must be at least 3" }),
	amount: z
		.number({ invalid_type_error: "Amount is required" })
		.positive({ message: "Amount must be postive" }),
	category: z.string().min(3, { message: "Category is required" }),
});

export type FormData = z.infer<typeof schema> & DataProps;
type OnSubmit = {
	addData: (data: FormData) => void;
};

export default function ExpanseForm({ addData }: OnSubmit) {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<FormData>({ resolver: zodResolver(schema) });

	const onSubmit = (data: FormData) => {
		console.log(data);
		addData(data);
	};
	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="mb-3">
					<label htmlFor="description" className="form-label">
						Description:
					</label>
					<input
						{...register("description")}
						type="text"
						id="description"
						className="form-control"
					/>
					{errors.description && (
						<p className="text-danger">{errors.description.message}</p>
					)}
				</div>

				<div className="mb-3">
					<label htmlFor="amount" className="form-label">
						Amount:
					</label>
					<input
						{...register("amount", { valueAsNumber: true })}
						type="number"
						id="amount"
						className="form-control"
					/>
					{errors.amount && (
						<p className="text-danger">{errors.amount.message}</p>
					)}
				</div>
				<div className="mb-3">
					<label htmlFor="category" className="form-label">
						Category:
					</label>
					<select
						{...register("category")}
						className="form-select form-select-lg mb-3"
						aria-label="Large select example"
					>
						<option></option>
						<option value="groceries">Groceries</option>
						<option value="utilities">Utilities</option>
						<option value="entertainment">Entertainment</option>
					</select>
					{errors.category && (
						<p className="text-danger">{errors.category.message}</p>
					)}
				</div>
				<button disabled={!isValid} className="btn btn-primary" type="submit">
					Submit
				</button>
			</form>
		</>
	);
}
