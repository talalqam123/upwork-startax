import { configureStore } from '@reduxjs/toolkit';
import salaryReducer from './slices/salarySlice';

export const store = configureStore({
  reducer: {
    salary: salaryReducer,
  },
});

export default store;
// Remove TypeScript type definitions
// If you need these types later, create a separate index.d.ts file
