import React, { useEffect, useState } from 'react'
import userService, { IUser } from '../services/userService';
import { CanceledError } from '../services/api-client';

export default function useUsers() {
 const [users, setUsers] = useState<IUser[]>([]);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		setLoading(true);

		const { request, cancel } = userService.getAll<IUser>();
		request
			.then((res) => {
				setUsers(res.data);
				setLoading(false);
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setError(err.message);
				setLoading(false);
			});
		return () => cancel();
	}, []);
 return { users, error, loading, setError, setLoading, setUsers };
}
