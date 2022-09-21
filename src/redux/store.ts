import { configureStore } from '@reduxjs/toolkit';
import { api } from './api';
import transferReducer from './slice';

export const store = configureStore({
	reducer: {
		[api.reducerPath]: api.reducer,
		transfers: transferReducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
