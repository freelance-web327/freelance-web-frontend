import {
    PROJECT_CREATE_REQUEST,
    PROJECT_CREATE_SUCCESS,
    PROJECT_CREATE_FAIL,
  } from "../constants/projectConstants";
  import { GET_ALL_PROJECTS_SUCCESS } from "../actions/projectActions";
  
  /**
   * Reducer for creating a project.
   * @function
   * @param {Object} state - The current state.
   * @param {Object} action - The dispatched action.
   * @returns {Object} The new state.
   */
  export const projectCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case PROJECT_CREATE_REQUEST:
        return { loading: true };
      case PROJECT_CREATE_SUCCESS:
        return { loading: false, success: true, project: action.payload };
      case PROJECT_CREATE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  const initialState = [];
  
  /**
   * Reducer function for managing project-related state.
   *
   * @param {Array} state - The current state.
   * @param {Object} action - The action to be performed.
   * @returns {Array} The new state after performing the action.
   */
  
  const projectReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ALL_PROJECTS_SUCCESS:
        return action.payload;
      default:
        return state;
    }
  };
  
  export default projectReducer;
  