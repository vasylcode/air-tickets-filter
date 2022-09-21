import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ITicket } from '../types/ticket';

export const api = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
	endpoints: build => ({
		getApi: build.query<ITicket[], void>({
			// query: transfers => {
			// 	console.log('arg: ', transfers);
			// 	return {
			// 		url: 'tickets',
			// 		params: { transfers },
			// 	};
			// },
			// query: transfers => `tickets?${transfers >= 0 && `transfers[]=${transfers}`}`,
			query: () => `tickets`,
			// transformResponse: (response: ServerResponse) => response.tickets,
		}),
	}),
});

export const { useGetApiQuery } = api;
