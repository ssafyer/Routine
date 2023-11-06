import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = {
	userId: '1234',
	userName: '',
};

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		value: initialStateValue,
		routineList: [],
	},
	reducers: {
		login: (state, action) => {
			state.value = action.payload;
		},
		logout: (state) => {
			state.value = initialStateValue;
			state.routineList = [];
		},
		setRoutineList: (state, action) => {
			state.routineList = action.payload;
		},
	},
});

export const { login, logout, setRoutineList } = userSlice.actions;

export default userSlice.reducer;
