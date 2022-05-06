import { createSlice } from '@reduxjs/toolkit';
import { createBusiness } from '../actions/businessAction';
const businessReducer = createSlice({
	name: 'businessReducer',
	initialState: {
		businessInfo: {},
		loader: false,
		errors: {},
	},
	reducers: {

	},
	extraReducers: {
		[createBusiness.pending]: (state, action) => {
			state.loader = true;
		},
		[createBusiness.fulfilled]: (state, action) => {
			state.loader = false;
			state.businessInfo = action.payload;
		},
		[createBusiness.rejected]: (state, action) => {
			state.loader = false;
			state.errors = action.payload;
		},
	},
});
export const { } = businessReducer.actions;
export default businessReducer.reducer;