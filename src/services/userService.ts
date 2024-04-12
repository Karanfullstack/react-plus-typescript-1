import { createService } from "./http-service";
export interface IUser {
	id: number;
	name: string;
}

export default createService("/users/");
