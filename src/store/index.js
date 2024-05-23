import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import rootReducer from "../features/reducers/adminReducer";

/**
 * Configures the Redux store with various reducers.
 *
 * @property {Object} reducer - An object containing slice reducers.
 * @property {Function} reducer.auth - Handles authentication state.
 * @property {Function} reducer.admin - Handles admin panel state.
 * @property {Function} reducer.search - Handles search functionality state.
 * @property {Function} reducer.payment - Handles payment state.
 * @returns {EnhancedStore} The configured Redux store.
 */


export const store = configureStore({
  reducer: {
    auth: authReducer,
    admin: rootReducer,
    payment: paymentReducer,
  },
});

export default store;
