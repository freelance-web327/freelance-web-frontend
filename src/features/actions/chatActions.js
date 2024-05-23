/**
 * Action type for requesting chat fetch.
 * @constant {string}
 */
export const FETCH_CHATS_REQUEST = "FETCH_CHATS_REQUEST";

/**
 * Action type for successfully fetched chats.
 * @constant {string}
 */
export const FETCH_CHATS_SUCCESS = "FETCH_CHATS_SUCCESS";

/**
 * Action type for failed chat fetch.
 * @constant {string}
 */
export const FETCH_CHATS_FAILURE = "FETCH_CHATS_FAILURE";

/**
 * Action type for requesting message send.
 * @constant {string}
 */
export const SEND_MESSAGE_REQUEST = "SEND_MESSAGE_REQUEST";

/**
 * Action type for successfully sent message.
 * @constant {string}
 */
export const SEND_MESSAGE_SUCCESS = "SEND_MESSAGE_SUCCESS";

/**
 * Action type for failed message send.
 * @constant {string}
 */
export const SEND_MESSAGE_FAILURE = "SEND_MESSAGE_FAILURE";

/**
 * Action type for selecting a chat.
 * @constant {string}
 */
export const SELECT_CHAT = "SELECT_CHAT";

/**
 * Creates an action to request fetching chats.
 *
 * @returns {Object} An action object with type FETCH_CHATS_REQUEST.
 */
export const fetchChatsRequest = () => ({
  type: FETCH_CHATS_REQUEST,
});

/**
 * Creates an action for successfully fetched chats.
 *
 * @param {Array} chats - The fetched chats.
 * @returns {Object} An action object with type FETCH_CHATS_SUCCESS and payload containing chats.
 */
export const fetchChatsSuccess = (chats) => ({
  type: FETCH_CHATS_SUCCESS,
  payload: chats,
});

/**
 * Creates an action for failed chat fetch.
 *
 * @param {Object} error - The error object.
 * @returns {Object} An action object with type FETCH_CHATS_FAILURE and payload containing error.
 */
export const fetchChatsFailure = (error) => ({
  type: FETCH_CHATS_FAILURE,
  payload: error,
});

/**
 * Creates an action to request sending a message.
 *
 * @returns {Object} An action object with type SEND_MESSAGE_REQUEST.
 */
export const sendMessageRequest = () => ({
  type: SEND_MESSAGE_REQUEST,
});

/**
 * Creates an action for successfully sent message.
 *
 * @param {Object} chat - The chat object containing the sent message.
 * @returns {Object} An action object with type SEND_MESSAGE_SUCCESS and payload containing chat.
 */
export const sendMessageSuccess = (chat) => ({
  type: SEND_MESSAGE_SUCCESS,
  payload: chat,
});

/**
 * Creates an action for failed message send.
 *
 * @param {Object} error - The error object.
 * @returns {Object} An action object with type SEND_MESSAGE_FAILURE and payload containing error.
 */
export const sendMessageFailure = (error) => ({
  type: SEND_MESSAGE_FAILURE,
  payload: error,
});

/**
 * Creates an action to select a chat.
 *
 * @param {Object} chat - The selected chat object.
 * @returns {Object} An action object with type SELECT_CHAT and payload containing chat.
 */
export const selectChat = (chat) => ({
  type: SELECT_CHAT,
  payload: chat,
});
