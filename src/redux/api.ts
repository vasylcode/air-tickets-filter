import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ITicket } from '../types/ticket';

export const api = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
	endpoints: build => ({
		getApi: build.query<ITicket[], number>({
			// query: () => `tickets`,
			query: (transfers: number) => `tickets?${transfers >= 0 && `transfers=${transfers}`}`,
			// transformResponse: (response: ServerResponse) => response.tickets,
		}),
	}),
});

export const { useGetApiQuery } = api;
