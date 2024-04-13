import { useEffect, useState } from "react";
import userService, { UsersProps } from "../practiceEffect/userService";
import { CanceledError } from "axios";

export default function useHook() {
	const [users, setUsers] = useState<UsersProps[]>([]);
	const [errors, setErrors] = useState("");
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		const { request, cancel } = userService.getAll<UsersProps>();
		request
			.then(({ data }) => {
				setLoading(false);
				setUsers(data);
			})
			.catch((err) => {
				if (err instanceof CanceledError) {
					return;
				}
				setErrors(err.message);
			});

		return () => cancel();
	}, []);
	return { users, errors, setUsers, setErrors, loading, setLoading };
}
