import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "../../../../features/actions/adminActions";

/**
 * Projects component.
 * @returns {JSX.Element} Projects UI.
 */
const Projects = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects);

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  return (
    <div>
      <h2>Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project._id}>
            {project.title} - {project.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
