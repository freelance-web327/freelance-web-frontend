import axios from "axios";

/**
 * Action type for successful advanced search results.
 * @constant {string}
 */
export const ADVANCED_SEARCH_SUCCESS = "ADVANCED_SEARCH_SUCCESS";

/**
 * Creates an action for successful advanced search results.
 *
 * @param {Array} results - The array of search results.
 * @returns {Object} An action object with type ADVANCED_SEARCH_SUCCESS and payload containing the search results.
 */
export const advancedSearchSuccess = (results) => ({
  type: ADVANCED_SEARCH_SUCCESS,
  payload: results,
});

/**
 * Thunk action creator to perform an advanced search.
 *
 * Dispatches the advancedSearchSuccess action upon successful completion of the advanced search.
 *
 * @param {Object} formData - The form data containing search parameters.
 * @returns {Function} A thunk function that dispatches an action.
 */
export const advancedSearch = (formData) => async (dispatch) => {
  try {
    const res = await axios.get("/api/search", { params: formData });
    dispatch(advancedSearchSuccess(res.data));
  } catch (error) {
    console.error("Error performing advanced search:", error);
  }
};
