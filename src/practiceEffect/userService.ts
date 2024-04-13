import { createService } from "./api-service";

export interface UsersProps {
	id: number;
	name: string;
}
export default createService("/users/");
