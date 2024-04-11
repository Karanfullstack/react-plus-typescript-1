import apiClient from "./api-client";

export interface IUser {
	id: number;
	name: string;
}
class UserService {
	getAllUsers() {
		const controller = new AbortController();
		const request = apiClient.get<IUser[]>("/users", {
			signal: controller.signal,
		});
		return { request, cancel: () => controller.abort() };
	}

	deleteUser(id: number) {
		return apiClient.delete("/users/" + id);
	}

	createUser(user: IUser) {
		return apiClient.post("/users", user);
	}

	updateUser(user: IUser) {
		return apiClient.patch("/users/" + user.id, user);
	}
}

export default new UserService();
