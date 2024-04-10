import axios, { AxiosError, CanceledError } from "axios";
import { useEffect, useState } from "react";

interface IUser {
	id: number;
	name: string;
}
function App() {
	const [users, setUsers] = useState<IUser[]>([]);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	useEffect(() => {
		const controller = new AbortController();
		setLoading(true);
		axios
			.get<IUser[]>("https://jsonplaceholder.typicode.com/users", {
				signal: controller.signal,
			})
			.then((res) => {
				setUsers(res.data);
				setLoading(false);
			})
			.catch((err: AxiosError) => {
				if (err instanceof CanceledError) return;
				setError(err.message);
				setLoading(false);
			});
		return () => controller.abort();
	}, []);

	const handleDelete = (user: IUser) => {
		const originalUser = [...users];
		setUsers(users.filter((u) => u.id !== user.id));
		axios
			.delete("https://jsonplaceholder.typicode.com/users/" + user.id)
			.catch((err) => {
				setError(err.message);
				setUsers(originalUser);
			});
	};
	return (
		<div>
			{error && <div className="text-danger">{error}</div>}
			<ul className="list-group">
				{users.map((user) => (
					<li
						className="list-group-item d-flex justify-content-between"
						key={user.id}
					>
						{user.name}
						<button
							onClick={() => handleDelete(user)}
							className="btn btn-danger"
						>
							Delete
						</button>
					</li>
				))}
			</ul>

			{loading && <div className="spinner-border"></div>}
		</div>
	);
}

export default App;
