import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import rootReducer from "../features/reducers/adminReducer";
import chatReducer from "../features/reducers/chatReducer";
import paymentReducer from "../features/reducers/paymentReducer";
import searchReducer from "../features/reducers/searchReducer";
import proposalReducer from "../features/reducers/proposalReducer";


/**
 * Configures the Redux store with various reducers.
 *
 * @property {Object} reducer - An object containing slice reducers.
 * @property {Function} reducer.auth - Handles authentication state.
 * @property {Function} reducer.admin - Handles admin panel state.
 * @property {Function} reducer.chat - Handles chat state.
 * @property {Function} reducer.search - Handles search functionality state.
 * @property {Function} reducer.payment - Handles payment state.
 * @property {Function} reducer.projectCreate - Handles project creation state.
 * @property {Function} reducer.projectProposal - Handles project proposals state.
 * @returns {EnhancedStore} The configured Redux store.
 */


export const store = configureStore({
  reducer: {
    auth: authReducer,
    admin: rootReducer,
    chat: chatReducer,
    payment: paymentReducer,
    search: searchReducer,
    projectCreate: projectCreateReducer,
    projectProposal: proposalReducer,
  },
});

export default store;
