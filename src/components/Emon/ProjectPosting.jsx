import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProject } from "../../features/actions/projectActions";
/**
 * Component for posting a new project.
 * @component
 * @returns {JSX.Element}
 */
const ProjectPostingForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    budget: "",
    deadline: "",
  });

  const dispatch = useDispatch();
  const projectCreate = useSelector((state) => state.projectCreate);
  const { loading, error, success } = projectCreate;

  /**
   * Handle form field changes.
   * @function
   * @param {Object} e - Event object.
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  /**
   * Handle form submission.
   * @function
   * @param {Object} e - Event object.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProject(formData));
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Post a New Project</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {success && (
        <p className="text-green-500">Project created successfully!</p>
      )}
      <form onSubmit={handleSubmit}>
        <label className="block mb-4">
          <span className="text-gray-700">Project Title</span>
          <input
            type="text"
            name="title"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Description</span>
          <textarea
            name="description"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            rows="5"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Category</span>
          <select
            name="category"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option value="web-development">Web Development</option>
            <option value="graphic-design">Graphic Design</option>
            <option value="data-entry">Data Entry</option>
            <option value="content-writing">Content Writing</option>
            <option value="digital-marketing">Digital Marketing</option>
          </select>
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Budget</span>
          <input
            type="number"
            name="budget"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            value={formData.budget}
            onChange={handleChange}
            required
          />
        </label>

        <label className="block mb-6">
          <span className="text-gray-700">Deadline</span>
          <input
            type="date"
            name="deadline"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            value={formData.deadline}
            onChange={handleChange}
            required
          />
        </label>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Post Project
        </button>
      </form>
    </div>
  );
};

export default ProjectPostingForm;
