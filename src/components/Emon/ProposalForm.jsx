import { useState } from "react";
import { useDispatch } from "react-redux";
import { createProposal } from "../../features/actions/proposalActions";

/**
 * Component for creating a new project proposal.
 * @returns {JSX.Element} ProposalForm component.
 */
const ProposalForm = () => {
  const [message, setMessage] = useState("");
  const [projectId, setProjectId] = useState("");

  const dispatch = useDispatch();

  /**
   * Handles form submission to create a new proposal.
   * @param {Event} e - Form submit event.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProposal({ message, projectId }));
    setMessage("");
    setProjectId("");
  };

  return (
    <div className="max-w-sm mx-auto">
      <h2 className="text-xl font-semibold mb-4">Submit Proposal</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="projectId" className="block mb-2">
            Project ID:
          </label>
          <input
            type="text"
            id="projectId"
            className="border rounded px-4 py-2 w-full"
            value={projectId}
            onChange={(e) => setProjectId(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2">
            Message:
          </label>
          <textarea
            id="message"
            className="border rounded px-4 py-2 w-full"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit Proposal
        </button>
      </form>
    </div>
  );
};

export default ProposalForm;
