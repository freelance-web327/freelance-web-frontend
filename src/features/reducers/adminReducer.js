import {
  GET_USERS,
  BAN_USER,
  GET_PROJECTS,
  HANDLE_REPORT,
  GET_LOGS,
  APPROVE_OR_REJECT_PAYMENT,
} from "../actions/adminActions";

const initialState = {
  users: [],
  projects: [],
  reports: [],
  logs: [],
  payments: [],
};

/**
 * Root reducer for the admin panel.
 * @param {Object} state - Current state.
 * @param {Object} action - Action object.
 * @returns {Object} - New state.
 */
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.payload };
    case BAN_USER:
      return {
        ...state,
        users: state.users.map((user) =>
          user._id === action.payload ? { ...user, isBanned: true } : user
        ),
      };
    case GET_PROJECTS:
      return { ...state, projects: action.payload };
    case HANDLE_REPORT:
      return {
        ...state,
        reports: state.reports.map((report) =>
          report._id === action.payload.reportId
            ? { ...report, status: action.payload.status }
            : report
        ),
      };
    case GET_LOGS:
      return { ...state, logs: action.payload };
    case APPROVE_OR_REJECT_PAYMENT:
      return {
        ...state,
        payments: state.payments.map((payment) =>
          payment._id === action.payload._id ? action.payload : payment
        ),
      };
    default:
      return state;
  }
};

export default rootReducer;
