import { type FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
	name: z.string().min(3, { message: "Name must be at least 3 characters" }),
	age: z
		.number({ invalid_type_error: "Age filed required" })
		.min(18, { message: "Age must be at least 18" }),
});

type FormData = z.infer<typeof schema>;

export default function Form() {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<FormData>({ resolver: zodResolver(schema) });

	const onSubmit = (data: FieldValues) => {
		console.log(data);
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="mb-3">
				<label htmlFor="name" className="form-label">
					Name:
				</label>
				<input
					{...register("name")}
					type="text"
					id="name"
					className="form-control"
				/>
				{errors.name && <p className="text-danger">{errors.name.message}</p>}
			</div>
			<div className="mb-3">
				<label htmlFor="age" className="form-label">
					Age:
				</label>
				<input
					{...register("age", { valueAsNumber: true })}
					type="number"
					required
					id="age"
					className="form-control"
				/>
				{errors.age && <p className="text-danger">{errors.age.message}</p>}
			</div>
			<button disabled={!isValid} type="submit" className="btn btn-primary">
				Submit
			</button>
		</form>
	);
}
