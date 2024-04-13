import apiClient from "../practiceEffect/http-client";

class ApiService {
	constructor(private readonly endpoint: string) {}
	getAll<T>() {
		const controller = new AbortController();
		const request = apiClient.get<T[]>(this.endpoint, {
			signal: controller.signal,
		});
		return { request, cancel: () => controller.abort() };
	}

	delete(id: number) {
		return apiClient.delete(this.endpoint + id);
	}
}
export const createService = (endpoint: string) => new ApiService(endpoint);
