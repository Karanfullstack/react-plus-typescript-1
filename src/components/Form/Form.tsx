import React from "react";

export default function Form() {
	return (
		<form>
			<div className="mb-3">
				<label htmlFor="name" className="form-label">
					Name:
				</label>
				<input type="text" id="name" className="form-control" />
			</div>
			<div className="mb-3">
				<label htmlFor="age" className="form-label">
					Age:
				</label>
				<input type="number" id="age" className="form-control" />
			</div>
			<button type="submit" className="btn btn-primary">
				Submit
			</button>
		</form>
	);
}
