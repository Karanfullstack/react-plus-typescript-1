import { type FieldValues, useForm } from "react-hook-form";

export default function Form() {
	const { register, handleSubmit } = useForm();

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
					required
					className="form-control"
				/>
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
