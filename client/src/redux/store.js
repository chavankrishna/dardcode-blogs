import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './user/userSlice'; // Named import for the reducer

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
