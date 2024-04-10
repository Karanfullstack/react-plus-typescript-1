import axios from "axios";
import { useEffect, useState } from "react";

interface IUser {
	id: number;
	name: string;
}
function App() {
	const [users, setUsers] = useState<IUser[]>([]);
	useEffect(() => {
		axios
			.get<IUser[]>("https://jsonplaceholder.typicode.com/users")
			.then((res) => setUsers(res.data));
	}, []);
	return (
		<div>
			{users.map((user) => (
				<li key={user.id}>{user.name}</li>
			))}
		</div>
	);
}

export default App;
