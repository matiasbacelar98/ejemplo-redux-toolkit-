import { configureStore } from '@reduxjs/toolkit';
import userReducer from './state/user';
import themeReducer from './state/theme';
import jokeReducer from './state/joke';

export const store = configureStore({
   reducer: { user: userReducer, theme: themeReducer, joke: jokeReducer },
});
