import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Server } from 'http';
import { ServerResponse, Ticket } from '../types/ticket';

export const api = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
	endpoints: build => ({
		getApi: build.query<Ticket[], void>({
			query: () => 'tickets',
			// transformResponse: (response: ServerResponse) => response.tickets,
		}),
	}),
});

export const { useGetApiQuery } = api;
