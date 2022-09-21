export interface Ticket {
	id: number;
	transfers: number;
}

export interface ServerResponse {
	tickets: Ticket[];
}

export interface ICheckbox {
	name: string;
	only: boolean;
}
