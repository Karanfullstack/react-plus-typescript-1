import userService, { IUser } from "./services/userService";
import useUsers from "./hooks/useUsers";

function App() {
	const { users, error, loading, setError, setUsers } = useUsers();

	const handleDelete = (user: IUser) => {
		const originalUser = [...users];
		setUsers(users.filter((u) => u.id !== user.id));
		userService.delete(user.id).catch((err) => {
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
		userService
			.create(newUser)
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
		const updatedUser = { ...user, name: user.name + "!" };
		setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));
		userService.update(updatedUser).catch((err) => {
			setError(err.message);
			setUsers(originalUsers);
		});
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
