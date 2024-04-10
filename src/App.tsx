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

	return (
		<div>
			{users.map((user) => (
				<li key={user.id}>{user.name}</li>
			))}
			{error && <div className="text-danger">{error}</div>}
			{loading && <div className="spinner-border"></div>}
		</div>
	);
}

export default App;
