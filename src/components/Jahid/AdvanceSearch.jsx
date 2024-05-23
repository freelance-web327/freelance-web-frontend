import { useState } from "react";
import { useDispatch } from "react-redux";
import { advancedSearch } from "../../features/actions/searchActions";

/**
 * Component for handling advanced search and filtering for freelancers.
 * @returns {JSX.Element} FreelancerSearchForm component.
 */
const FreelancerSearchForm = () => {
  const [formData, setFormData] = useState({
    type: "",
    level: "",
    hourlyRate: "",
    skill: "",
  });

  const dispatch = useDispatch();

  /**
   * Handles input change in the form.
   * @param {Event} e - Input change event.
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  /**
   * Handles form submission.
   * @param {Event} e - Form submit event.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(advancedSearch(formData));
  };

  /**
   * Clears all form fields.
   */
  const clearAll = () => {
    setFormData({
      type: "",
      level: "",
      hourlyRate: "",
      skill: "",
    });
  };

  return (
    <div className="max-w-xs mx-auto bg-gray-100 p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Freelancer</h2>
        <button
          className="text-sm text-blue-600 hover:underline"
          onClick={clearAll}
        >
          clear all
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="type"
            className="block text-sm font-medium text-gray-700"
          >
            Type
          </label>
          <input
            type="text"
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default FreelancerSearchForm;
