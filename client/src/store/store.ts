// frontend/src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice'; // Import your auth reducer

const store = configureStore({
  reducer: {
    auth: authReducer, // Add your auth reducer to the store
    // Add other reducers here as needed (e.g., for servers, billing, etc.)
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;