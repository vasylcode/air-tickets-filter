import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	transfers: [
		{
			id: 1,
			name: 'all',
			only: false,
			status: true,
			value: -1,
		},
		{
			id: 2,
			name: 'no transfers',
			only: true,
			status: false,
			value: 0,
		},
		{
			id: 3,
			name: '1 transfer',
			only: true,
			status: false,
			value: 1,
		},
		{
			id: 4,
			name: '2 transfers',
			only: true,
			status: false,
			value: 2,
		},
		{
			id: 5,
			name: '3 transfers',
			only: true,
			status: false,
			value: 3,
		},
	],
};

const slice = createSlice({
	name: 'transfers',
	initialState,
	reducers: {
		toggleTransferItem(state, action) {
			state.transfers = state.transfers.map(item => {
				if (item.id === action.payload.id) {
					return {
						...item,
						status: !item.status,
					};
				}
				return item;
			});
		},
		setTransfer(state, action) {
			state.transfers = state.transfers.map(item => {
				if (item.id === action.payload.id) {
					return {
						...item,
						status: true,
					};
				}
				return {
					...item,
					status: false,
				};
			});
		},
	},
});

export const { toggleTransferItem, setTransfer } = slice.actions;
export default slice.reducer;
