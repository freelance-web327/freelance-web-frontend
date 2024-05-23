import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";

/**
 * Configures the Redux store with various reducers.
 *
 * @property {Object} reducer - An object containing slice reducers.
 * @property {Function} reducer.auth - Handles authentication state.
 *
 * @returns {EnhancedStore} The configured Redux store.
 */

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
