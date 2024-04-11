import { useEffect, useState } from "react";
import apiClient,{CanceledError} from "./services/api-client";

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
		apiClient
			.get<IUser[]>("https://jsonplaceholder.typicode.com/users", {
				signal: controller.signal,
			})
			.then((res) => {
				setUsers(res.data);
				setLoading(false);
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setError(err.message);
				setLoading(false);
			});
		return () => controller.abort();
	}, []);

	const handleDelete = (user: IUser) => {
		const originalUser = [...users];
		setUsers(users.filter((u) => u.id !== user.id));
		apiClient
			.delete("https://jsonplaceholder.typicode.com/users/" + user.id)
			.catch((err) => {
				setError(err.message);
				setUsers(originalUser);
			});
	};

	const handleAdd = () => {
		const originalUsers = [...users];
		const newUser = {
			id: 0,
			name: "New User",
		};
		setUsers([...users, newUser]);
		apiClient
			.post("https://jsonplaceholder.typicode.com/users", newUser)
			.then(({ data: savedUser }) => {
				console.log(savedUser);
				setUsers([...users, savedUser]);
			})
			.catch((err) => {
				setError(err.message);
				setUsers(originalUsers);
			});
	};

	const handleUpdate = (user: IUser) => {
		const originalUsers = [...users];
		const updatedUser = {...user, name: user.name + "!"};
		setUsers(users.map((u)=> u.id === user.id ? updatedUser : u));
		apiClient.patch("https://jsonplaceholder.typicode.com/users/" + user.id, updatedUser)
		.catch((err)=>{
			setError(err.message);
			setUsers(originalUsers);
		})
	};


	return (
		<div>
			{error && <div className="text-danger">{error}</div>}
			<button onClick={handleAdd} className="btn btn-primary">
				Add User
			</button>
			<ul className="list-group">
				{users.map((user) => (
					<li
						className="list-group-item d-flex justify-content-between"
						key={user.id}
					>
						{user.name}
						<div>
							<button
								onClick={() => handleUpdate(user)}
								className="btn btn-warning mx-2"
							>
								Update
							</button>
							<button
								onClick={() => handleDelete(user)}
								className="btn btn-danger"
							>
								Delete
							</button>
						</div>
					</li>
				))}
			</ul>

			{loading && <div className="spinner-border"></div>}
		</div>
	);
}

export default App;
