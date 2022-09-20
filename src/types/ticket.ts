export interface Ticket {
	id: number;
	transfers: number;
}

export interface ServerResponse {
	tickets: Ticket[];
}
