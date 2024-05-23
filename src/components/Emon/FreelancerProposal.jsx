import ProposalForm from "./ProposalForm";
import ProposalList from "./ProposalList.jsx";

export default function FreelancerProposal() {
  return (
    <div className="container mx-auto p-4">
      <ProposalForm />
      <ProposalList />
    </div>
  );
}
