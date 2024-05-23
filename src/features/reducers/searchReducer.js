import { ADVANCED_SEARCH_SUCCESS } from "../actions/searchActions";

const initialState = {
  results: [],
};

/**
 * Reducer function for managing search-related state.
 *
 * @param {Object} state - The current state.
 * @param {Object} action - The action to be performed.
 * @returns {Object} The new state after performing the action.
 */

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADVANCED_SEARCH_SUCCESS:
      return {
        ...state,
        results: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
