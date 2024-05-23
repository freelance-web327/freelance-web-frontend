import axios from "axios";
import {
  PROJECT_CREATE_REQUEST,
  PROJECT_CREATE_SUCCESS,
  PROJECT_CREATE_FAIL,
} from "../constants/projectConstants";

/**
 * action creator to create a new project.
 *
 * @param {Object} projectData - The data of the project to create.
 * @returns {Function} A thunk function that dispatches actions.
 */
export const createProject = (projectData) => async (dispatch, getState) => {
  try {
    dispatch({ type: PROJECT_CREATE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post("/api/projects", projectData, config);

    dispatch({
      type: PROJECT_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PROJECT_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

/**
 * Action type for successfully getting all projects.
 * @constant {string}
 */
export const GET_ALL_PROJECTS_SUCCESS = "GET_ALL_PROJECTS_SUCCESS";

/**
 * Creates an action for successfully fetching all projects.
 *
 * @param {Array} projects - The list of all projects.
 * @returns {Object} An action object with type GET_ALL_PROJECTS_SUCCESS and payload containing the projects.
 */
export const getAllProjectsSuccess = (projects) => ({
  type: GET_ALL_PROJECTS_SUCCESS,
  payload: projects,
});

/**
 * action creator to fetch all projects.
 *
 * Dispatches the getAllProjectsSuccess action upon successfully fetching all projects.
 *
 * @returns {Function} A thunk function that dispatches an action.
 */
export const getAllProjects = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/projects");
    dispatch(getAllProjectsSuccess(res.data));
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
};
