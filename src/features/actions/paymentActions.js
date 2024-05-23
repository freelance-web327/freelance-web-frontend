import axios from "axios";

/**
 * Action type for a successful payment creation.
 * @constant {string}
 */
export const CREATE_PAYMENT_SUCCESS = "CREATE_PAYMENT_SUCCESS";

/**
 * Action type for successfully getting all payments.
 * @constant {string}
 */
export const GET_ALL_PAYMENTS_SUCCESS = "GET_ALL_PAYMENTS_SUCCESS";

/**
 * Action type for a successful payment refund.
 * @constant {string}
 */
export const REFUND_PAYMENT_SUCCESS = "REFUND_PAYMENT_SUCCESS";

/**
 * Creates an action for a successful payment creation.
 * 
 * @param {Object} payment - The created payment data.
 * @returns {Object} An action object with type CREATE_PAYMENT_SUCCESS and payload containing the payment data.
 */
export const createPaymentSuccess = (payment) => ({
  type: CREATE_PAYMENT_SUCCESS,
  payload: payment,
});

/**
 * Creates an action for successfully fetching all payments.
 * 
 * @param {Array} payments - The list of all payments.
 * @returns {Object} An action object with type GET_ALL_PAYMENTS_SUCCESS and payload containing the payments.
 */
export const getAllPaymentsSuccess = (payments) => ({
  type: GET_ALL_PAYMENTS_SUCCESS,
  payload: payments,
});

/**
 * action for a successful payment refund.
 * 
 * @param {string} paymentId - The ID of the refunded payment.
 * @returns {Object} An action object with type REFUND_PAYMENT_SUCCESS and payload containing the payment ID.
 */
export const refundPaymentSuccess = (paymentId) => ({
  type: REFUND_PAYMENT_SUCCESS,
  payload: paymentId,
});

/**
 * action creator to create a new payment.
 * 
 * Dispatches the createPaymentSuccess action upon successful creation of a payment.
 * 
 * @param {Object} paymentData - The data for the payment to be created.
 * @returns {Function} A thunk function that dispatches an action.
 */
export const createPayment = (paymentData) => async (dispatch) => {
  try {
    const res = await axios.post("/api/payments", paymentData);
    dispatch(createPaymentSuccess(res.data));
  } catch (error) {
    console.error("Error creating payment:", error);
  }
};

/**
 * action creator to fetch all payments.
 * 
 * Dispatches the getAllPaymentsSuccess action upon successfully fetching all payments.
 * 
 * @returns {Function} A thunk function that dispatches an action.
 */
export const getAllPayments = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/payments");
    dispatch(getAllPaymentsSuccess(res.data));
  } catch (error) {
    console.error("Error fetching payments:", error);
  }
};

/**
 * action creator to refund a payment.
 * 
 * Dispatches the refundPaymentSuccess action upon successfully refunding a payment.
 * 
 * @param {string} paymentId - The ID of the payment to be refunded.
 * @returns {Function} A thunk function that dispatches an action.
 */
export const refundPayment = (paymentId) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/payments/${paymentId}/refund`);
    dispatch(refundPaymentSuccess(res.data.paymentId));
  } catch (error) {
    console.error("Error refunding payment:", error);
  }
};
