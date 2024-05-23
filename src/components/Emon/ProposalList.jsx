import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProposalsByFreelancer } from "../../features/actions/proposalActions";

/**
 * Component to display a list of proposals submitted by a freelancer.
 * @returns {JSX.Element} ProposalList component.
 */
const ProposalList = () => {
  const proposals = useSelector((state) => state.proposals);
  const dispatch = useDispatch();

  useEffect(() => {
    let freelancerId = "123"; // Replace with actual freelancer ID
    // Fetch proposals by freelancer when component mounts
    dispatch(getProposalsByFreelancer(freelancerId));
  }, [dispatch]);

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Your Proposals</h2>
      {proposals.map((proposal) => (
        <div key={proposal._id} className="bg-gray-100 p-4 mb-4 rounded">
          <p>Project ID: {proposal.projectId}</p>
          <p>Message: {proposal.message}</p>
          <p>Submitted At: {new Date(proposal.submittedAt).toLocaleString()}</p>
          <button className="bg-red-500 text-white px-4 py-2 rounded">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProposalList;
