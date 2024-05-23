import {
    PROFILE_REQUEST,
    PROFILE_SUCCESS,
    PROFILE_FAIL,
    PROFILE_UPDATE_REQUEST,
    PROFILE_UPDATE_SUCCESS,
    PROFILE_UPDATE_FAIL,
  } from "../constants/profileConstants";
  
  /**
   * Reducer function for managing user profile-related state.
   *
   * @param {Object} state - The current state.
   * @param {Object} action - The action to be performed.
   * @returns {Object} The new state after performing the action.
   */
  
  export const profileReducer = (state = { user: {} }, action) => {
    switch (action.type) {
      case PROFILE_REQUEST:
        return { ...state, loading: true };
      case PROFILE_SUCCESS:
        return { loading: false, user: action.payload };
      case PROFILE_FAIL:
        return { loading: false, error: action.payload };
      case PROFILE_UPDATE_REQUEST:
        return { ...state, loading: true };
      case PROFILE_UPDATE_SUCCESS:
        return { loading: false, success: true, user: action.payload };
      case PROFILE_UPDATE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  