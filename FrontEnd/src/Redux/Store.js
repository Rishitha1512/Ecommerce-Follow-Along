import { configureStore } from '@reduxjs/toolkit';
import UserReducer from './Users/UsersSlice';
const store = configureStore({
  reducer: {
    user: UserReducer,
  },
});
export default store;