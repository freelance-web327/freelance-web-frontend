import axios from "axios";

/**
 * Action type for getting users.
 * @constant {string}
 */
export const GET_USERS = "GET_USERS";

/**
 * Action type for banning a user.
 * @constant {string}
 */
export const BAN_USER = "BAN_USER";

/**
 * Action type for getting projects.
 * @constant {string}
 */
export const GET_PROJECTS = "GET_PROJECTS";

/**
 * Action type for handling a report.
 * @constant {string}
 */
export const HANDLE_REPORT = "HANDLE_REPORT";

/**
 * Action type for getting logs.
 * @constant {string}
 */
export const GET_LOGS = "GET_LOGS";

/**
 * Action type for approving or rejecting a payment.
 * @constant {string}
 */
export const APPROVE_OR_REJECT_PAYMENT = "APPROVE_OR_REJECT_PAYMENT";

/**
 * Fetches the list of users from the server.
 *
 * Dispatches the GET_USERS action with the fetched users as payload.
 *
 * @returns {Function} A thunk function that dispatches an action.
 */
export const getUsers = () => async (dispatch) => {
  try {
    const response = await axios.get("/api/admin/users");
    dispatch({ type: GET_USERS, payload: response.data.data });
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

/**
 * Bans a user by their ID.
 *
 * Dispatches the BAN_USER action with the banned user's ID as payload.
 *
 * @param {string} userId - The ID of the user to ban.
 * @returns {Function} A thunk function that dispatches an action.
 */
export const banUser = (userId) => async (dispatch) => {
  try {
    await axios.put(`/api/admin/users/ban/${userId}`);
    dispatch({ type: BAN_USER, payload: userId });
  } catch (error) {
    console.error("Error banning user:", error);
  }
};

/**
 * Fetches the list of projects from the server.
 *
 * Dispatches the GET_PROJECTS action with the fetched projects as payload.
 *
 * @returns {Function} A thunk function that dispatches an action.
 */
export const getProjects = () => async (dispatch) => {
  try {
    const response = await axios.get("/api/admin/projects");
    dispatch({ type: GET_PROJECTS, payload: response.data.data });
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
};

/**
 * Handles a report by updating its status.
 *
 * Dispatches the HANDLE_REPORT action with the report ID and new status as payload.
 *
 * @param {string} reportId - The ID of the report to handle.
 * @param {string} status - The new status of the report.
 * @returns {Function} A thunk function that dispatches an action.
 */
export const handleReport = (reportId, status) => async (dispatch) => {
  try {
    await axios.put(`/api/admin/reports/${reportId}`, { status });
    dispatch({ type: HANDLE_REPORT, payload: { reportId, status } });
  } catch (error) {
    console.error("Error handling report:", error);
  }
};

/**
 * Fetches the logs from the server.
 *
 * Dispatches the GET_LOGS action with the fetched logs as payload.
 *
 * @returns {Function} A thunk function that dispatches an action.
 */
export const getLogs = () => async (dispatch) => {
  try {
    const response = await axios.get("/api/admin/logs");
    dispatch({ type: GET_LOGS, payload: response.data.data });
  } catch (error) {
    console.error("Error fetching logs:", error);
  }
};

/**
 * Approves or rejects a payment by its ID and new status.
 *
 * Dispatches the APPROVE_OR_REJECT_PAYMENT action with the updated payment data as payload.
 *
 * @param {string} paymentId - The ID of the payment to approve or reject.
 * @param {string} status - The new status of the payment.
 * @returns {Function} A thunk function that dispatches an action.
 */
export const approveOrRejectPayment =
  (paymentId, status) => async (dispatch) => {
    try {
      const response = await axios.put(`/api/admin/payments/${paymentId}`, {
        status,
      });
      dispatch({
        type: APPROVE_OR_REJECT_PAYMENT,
        payload: response.data.data,
      });
    } catch (error) {
      console.error("Error approving or rejecting payment:", error);
    }
  };
