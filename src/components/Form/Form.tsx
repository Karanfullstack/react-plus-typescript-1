import { type FieldValues, useForm } from "react-hook-form";

interface FormData {
	name: string;
	age: number;
}
export default function Form() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();

	console.log(errors);
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
					{...register("name", { required: true, minLength: 3 })}
					type="text"
					id="name"
					className="form-control"
				/>
				{errors.name?.type === "required" && (
					<p className="text-danger">This field is required</p>
				)}
				{errors.age?.type === "minLength" && (
					<p className="text-danger">Min Length should be 3</p>
				)}
			</div>
			<div className="mb-3">
				<label htmlFor="age" className="form-label">
					Age:
				</label>
				<input
					{...register("age")}
					type="number"
					required
					id="age"
					className="form-control"
				/>
			</div>
			<button type="submit" className="btn btn-primary">
				Submit
			</button>
		</form>
	);
}
