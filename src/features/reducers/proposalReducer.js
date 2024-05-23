import {
    CREATE_PROPOSAL_SUCCESS,
    GET_PROPOSALS_SUCCESS,
    DELETE_PROPOSAL_SUCCESS,
  } from "../actions/proposalActions";
  
  const initialState = [];
  
  /**
   * Reducer function for managing proposal-related state.
   *
   * @param {Array} state - The current state.
   * @param {Object} action - The action to be performed.
   * @returns {Array} The new state after performing the action.
   */
  
  const proposalReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_PROPOSAL_SUCCESS:
        return [...state, action.payload];
      case GET_PROPOSALS_SUCCESS:
        return action.payload;
      case DELETE_PROPOSAL_SUCCESS:
        return state.filter((proposal) => proposal._id !== action.payload);
      default:
        return state;
    }
  };
  
  export default proposalReducer;
  