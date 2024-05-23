import axios from "axios";
import {
  PROFILE_REQUEST,
  PROFILE_SUCCESS,
  PROFILE_FAIL,
  PROFILE_UPDATE_REQUEST,
  PROFILE_UPDATE_SUCCESS,
  PROFILE_UPDATE_FAIL,
} from "../constants/profileConstants";

/**
 * action creator to fetch the user's profile.
 *
 * @returns {Function} A thunk function that dispatches actions.
 */
export const getProfile = () => async (dispatch) => {
  try {
    dispatch({ type: PROFILE_REQUEST });

    const { data } = await axios.get("/api/profile");

    dispatch({ type: PROFILE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

/**
 * action creator to update the user's profile.
 *
 *
 * @param {Object} user - The user object containing updated profile information.
 * @returns {Function} function that dispatches actions.
 */
export const updateProfile = (user) => async (dispatch) => {
  try {
    dispatch({ type: PROFILE_UPDATE_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.put("/api/profile", user, config);

    dispatch({ type: PROFILE_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PROFILE_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
