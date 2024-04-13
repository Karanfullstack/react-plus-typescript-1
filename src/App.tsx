import useHook from "./hooks/useHook";
import apiClient from "./practiceEffect/http-client";
import { UsersProps } from "./practiceEffect/userService";

function App() {
	const { users, errors, loading, setErrors, setLoading, setUsers } = useHook();
	const handelDelete = (id: number) => {
		setErrors("");
		const orignal = [...users];
		setUsers(users.filter((user) => user.id !== id));
		apiClient.delete("/users/" + id).catch((err) => {
			setErrors(err.message);
			setUsers(orignal);
		});
	};

	const handelCreate = () => {
		setErrors("");
		setLoading(true);
		const original = [...users];
		const newUser = { id: 0, name: "abhi singh" };
		setUsers([...users, newUser]);
		apiClient
			.post("/users", newUser)
			.then(({ data: savedUser }) => {
				setLoading(false);
				setUsers([...users, savedUser]);
			})
			.catch((err: Error) => {
				setErrors(err.message);
				setUsers(original);
				setLoading(false);
			});
	};

	const handelUpdate = (userPayload: UsersProps) => {
		const orignal = [...users];
		setLoading(true);
		setErrors("");
		const updatedUser = { ...userPayload, name: userPayload.name + "!" };
		setUsers(
			users.map((item) => (item.id === userPayload.id ? updatedUser : item))
		);
		apiClient
			.patch("/users/" + updatedUser.id, updatedUser)
			.then(() => {
				setLoading(false);
			})
			.catch((err) => {
				setErrors(err.message);
				setLoading(false);
				setUsers(orignal);
			});
	};
	return (
		<div>
			{errors && <div className="alert alert-danger">{errors}</div>}
			<ul className="list-group">
				{users?.map((user: UsersProps) => (
					<li
						key={user.id}
						className="list-group-item d-flex justify-content-between"
					>
						{user.name}
						<div>
							<button
								onClick={() => handelDelete(user.id)}
								className="btn btn-primary"
							>
								Delete
							</button>
							<button onClick={handelCreate} className="btn btn-primary mx-2">
								ADD
							</button>
							<button
								onClick={() => handelUpdate(user)}
								className="btn btn-primary"
							>
								Update
							</button>
						</div>
					</li>
				))}
			</ul>
			{loading && <div className="spinner-border" role="status"></div>}
		</div>
	);
}

export default App;
