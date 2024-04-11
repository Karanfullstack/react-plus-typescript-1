import apiClient from "./api-client";

interface Entity {
	id: number;
}
class Service {
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

	create<T>(entity: T) {
		return apiClient.post(this.endpoint, entity);
	}

	update<T extends Entity>(entity: T) {
		return apiClient.patch(this.endpoint + entity.id, entity);
	}
}

export const createService = (endpoint: string) => new Service(endpoint);
