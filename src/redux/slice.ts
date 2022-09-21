import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
	name: 'tickets',
	initialState: {
		tickets: [],
	},
	reducers: {
		changeTickets(state, action) {
			console.log(state);
			console.log(action);
		},
	},
});

export const { changeTickets } = slice.actions;
export default slice.reducer;
