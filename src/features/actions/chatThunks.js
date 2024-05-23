import {
  fetchChatsRequest,
  fetchChatsSuccess,
  fetchChatsFailure,
  sendMessageRequest,
  sendMessageSuccess,
  sendMessageFailure,
} from "./chatActions";

/**
 * fetch all chats for a user.
 * @param {string} userId - ID of the user.
 * @returns {Function} Dispatch function.
 */
export const fetchUserChats = (userId) => async (dispatch) => {
  dispatch(fetchChatsRequest());
  try {
    const response = await fetch(`/api/projects/chats/${userId}`);
    const data = await response.json();
    if (response.ok) {
      dispatch(fetchChatsSuccess(data.data));
    } else {
      dispatch(fetchChatsFailure(data.message));
    }
  } catch (error) {
    dispatch(fetchChatsFailure(error.message));
  }
};

/**
 * Thunk to send a message in a chat.
 * @param {string} chatId - ID of the chat.
 * @param {Object} message - Message object.
 * @returns {Function} Dispatch function.
 */
export const sendMessage = (chatId, message) => async (dispatch) => {
  dispatch(sendMessageRequest());
  try {
    const response = await fetch(`/api/projects/chat/${chatId}/message`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });
    const data = await response.json();
    if (response.ok) {
      dispatch(sendMessageSuccess(data.data));
    } else {
      dispatch(sendMessageFailure(data.message));
    }
  } catch (error) {
    dispatch(sendMessageFailure(error.message));
  }
};
