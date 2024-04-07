import { FormEvent, useRef } from "react";

export default function Form() {
	const nameRef = useRef<HTMLInputElement>(null);
	const ageRef = useRef<HTMLInputElement>(null);
	const person = { name: "", age: 0 };
	const handelSubmit = (event: FormEvent) => {
		event.preventDefault();
		person.name = nameRef.current?.value!;
		person.age = parseInt(ageRef.current?.value!);
		console.log(person);
	};
	return (
		<form onSubmit={handelSubmit}>
			<div className="mb-3">
				<label htmlFor="name" className="form-label">
					Name:
				</label>
				<input ref={nameRef} type="text" id="name" className="form-control" />
			</div>
			<div className="mb-3">
				<label htmlFor="age" className="form-label">
					Age:
				</label>
				<input ref={ageRef} type="number" id="age" className="form-control" />
			</div>
			<button type="submit" className="btn btn-primary">
				Submit
			</button>
		</form>
	);
}
