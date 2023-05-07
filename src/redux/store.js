import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { usersReducer } from './users/usersSlice';

const commonReducer = combineReducers({
    users: usersReducer,

});

export const store = configureStore({
  reducer: commonReducer,
});