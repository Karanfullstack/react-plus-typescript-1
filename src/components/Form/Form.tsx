import { FormEvent, useState } from "react";

export default function Form() {
	const [person, setPerson] = useState({ name: "", age: "" });

	const handelSubmit = (event: FormEvent) => {
		event.preventDefault();
		console.log(person);
	};
	return (
		<form onSubmit={handelSubmit}>
			<div className="mb-3">
				<label htmlFor="name" className="form-label">
					Name:
				</label>
				<input
					onChange={(e) => setPerson({ ...person, name: e.target.value })}
					type="text"
					id="name"
					value={person.name}
					required
					className="form-control"
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="age" className="form-label">
					Age:
				</label>
				<input
					onChange={(e) => setPerson({ ...person, age: e.target.value })}
					type="number"
					required
					value={person.age}
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
