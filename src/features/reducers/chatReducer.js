import {
  FETCH_CHATS_REQUEST,
  FETCH_CHATS_SUCCESS,
  FETCH_CHATS_FAILURE,
  SEND_MESSAGE_REQUEST,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAILURE,
  SELECT_CHAT,
} from "../actions/chatActions";

/**
 * Represents the initial state for the chat reducer.
 * @constant {Object}
 * @property {Array} chats - An array containing chat data.
 * @property {Object|null} selectedChat - The currently selected chat object.
 * @property {boolean} loading - A flag indicating if an action is in progress.
 * @property {string|null} error - A string containing error information, if any.
 */
const initialState = {
  chats: [],
  selectedChat: null,
  loading: false,
  error: null,
};

/**
 * Reducer function for managing chat-related state.
 *
 * @param {Object} state - The current state.
 * @param {Object} action - The action to be performed.
 * @returns {Object} The new state after performing the action.
 */
const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHATS_REQUEST:
    case SEND_MESSAGE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CHATS_SUCCESS:
      return {
        ...state,
        loading: false,
        chats: action.payload,
      };
    case FETCH_CHATS_FAILURE:
    case SEND_MESSAGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SEND_MESSAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        selectedChat: action.payload,
      };
    case SELECT_CHAT:
      return {
        ...state,
        selectedChat: action.payload,
      };
    default:
      return state;
  }
};

export default chatReducer;
