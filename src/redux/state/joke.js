import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// State inicial
const initialStateValue = {
   loading: false,
   joke: '',
   error: false,
};

// Async Actions
export const getJoke = createAsyncThunk('joke/getJoke', async () => {
   try {
      const response = await fetch('http://api.icndb.com/jokes/random');
      const data = await response.json();
      return data;
   } catch (error) {
      return error;
   }
});

export const jokeSlide = createSlice({
   name: 'joke',
   initialState: { value: initialStateValue },
   extraReducers: {
      // Loading
      [getJoke.pending]: (state) => {
         state.value = { ...state, loading: true };
      },
      // Success
      [getJoke.fulfilled]: (state, action) => {
         state.value = {
            loading: false,
            joke: action.payload.value.joke,
            error: false,
         };
      },
      // Error
      [getJoke.rejected]: (state) => {
         state.value = { ...state, loading: false, error: true };
      },
   },
});

export default jokeSlide.reducer;
