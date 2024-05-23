import axios from "axios";

/**
 * Action type for a successful proposal creation.
 * @constant {string}
 */
export const CREATE_PROPOSAL_SUCCESS = "CREATE_PROPOSAL_SUCCESS";

/**
 * Action type for successfully getting proposals.
 * @constant {string}
 */
export const GET_PROPOSALS_SUCCESS = "GET_PROPOSALS_SUCCESS";

/**
 * Action type for a successful proposal deletion.
 * @constant {string}
 */
export const DELETE_PROPOSAL_SUCCESS = "DELETE_PROPOSAL_SUCCESS";

/**
 * Creates an action for a successful proposal creation.
 *
 * @param {Object} proposal - The created proposal data.
 * @returns {Object} An action object with type CREATE_PROPOSAL_SUCCESS and payload containing the proposal data.
 */
export const createProposalSuccess = (proposal) => ({
  type: CREATE_PROPOSAL_SUCCESS,
  payload: proposal,
});

/**
 * Creates an action for successfully getting proposals.
 *
 * @param {Array} proposals - The list of proposals.
 * @returns {Object} An action object with type GET_PROPOSALS_SUCCESS and payload containing the proposals.
 */
export const getProposalsSuccess = (proposals) => ({
  type: GET_PROPOSALS_SUCCESS,
  payload: proposals,
});

/**
 * Creates an action for a successful proposal deletion.
 *
 * @param {string} proposalId - The ID of the deleted proposal.
 * @returns {Object} An action object with type DELETE_PROPOSAL_SUCCESS and payload containing the proposal ID.
 */
export const deleteProposalSuccess = (proposalId) => ({
  type: DELETE_PROPOSAL_SUCCESS,
  payload: proposalId,
});

/**
 * Thunk action creator to create a new proposal.
 *
 * Dispatches the createProposalSuccess action upon successful creation of a proposal.
 *
 * @param {Object} proposalData - The data for the proposal to be created.
 * @returns {Function} A thunk function that dispatches an action.
 */
export const createProposal = (proposalData) => async (dispatch) => {
  try {
    const res = await axios.post("/api/proposals", proposalData);
    dispatch(createProposalSuccess(res.data));
  } catch (error) {
    console.error("Error creating proposal:", error);
  }
};

/**
 * Thunk action creator to fetch proposals by freelancer ID.
 *
 * Dispatches the getProposalsSuccess action upon successfully fetching proposals.
 *
 * @param {string} freelancerId - The ID of the freelancer.
 * @returns {Function} A thunk function that dispatches an action.
 */
export const getProposalsByFreelancer = (freelancerId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/proposals/freelancer/${freelancerId}`);
    dispatch(getProposalsSuccess(res.data));
  } catch (error) {
    console.error("Error fetching proposals:", error);
  }
};

/**
 * Thunk action creator to delete a proposal.
 *
 * Dispatches the deleteProposalSuccess action upon successfully deleting a proposal.
 *
 * @param {string} proposalId - The ID of the proposal to be deleted.
 * @returns {Function} A thunk function that dispatches an action.
 */
export const deleteProposal = (proposalId) => async (dispatch) => {
  try {
    await axios.delete(`/api/proposals/${proposalId}`);
    dispatch(deleteProposalSuccess(proposalId));
  } catch (error) {
    console.error("Error deleting proposal:", error);
  }
};
