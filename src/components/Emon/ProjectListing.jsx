import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProjects } from "../../features/actions/projectActions";
import { Button } from "../../components/ui/button";

/**
 * Component to display a list of all projects.
 * @returns {JSX.Element} ProjectListing component.
 */
const ProjectListing = () => {
  const projects = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProjects());
  }, [dispatch]);

  return (
    <div className="max-w-7xl mx-auto">
      {projects.map((project) => (
        <div
          key={project._id}
          className="bg-white shadow-md rounded-lg p-6 flex justify-between items-center mb-4"
        >
          <div>
            <h2 className="text-xl font-bold">{project.title}</h2>
            <div className="text-gray-500 flex items-center space-x-4 mt-2">
              <span className="flex items-center">
                <span className="mr-1">📍</span>
                {project.location}
              </span>
              <span className="flex items-center">
                <span className="mr-1">📅</span>
                Posted {new Date(project.createdAt).toLocaleDateString()}{" "}
              </span>
              <span className="flex items-center">
                <span className="mr-1">💼</span>
                {project.proposals.length} Proposals
              </span>
            </div>
            <p className="mt-4 text-gray-700">{project.description}</p>
            <div className="mt-4 space-x-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold mb-4">
              ${project.budget.min} - ${project.budget.max}
            </div>
            <Button className="bg-green-500 text-white px-4 py-2 rounded-md">
              Send Proposal
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectListing;
