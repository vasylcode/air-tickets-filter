import { configureStore } from '@reduxjs/toolkit';
import { api } from './api';
import todoReducer from './slice';

export const store = configureStore({
	reducer: {
		[api.reducerPath]: api.reducer,
		tickets: todoReducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware),
});
