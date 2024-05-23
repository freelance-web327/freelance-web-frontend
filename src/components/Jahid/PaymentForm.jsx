import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPayment } from "../../features/actions/paymentActions";

/**
 * Component for handling payment form.
 * @returns {JSX.Element} PaymentForm component.
 */
const PaymentForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "United States",
    cardNumber: "",
    expiryDate: "",
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
    dispatch(createPayment(formData));
    setFormData({
      email: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      country: "United States",
      cardNumber: "",
      expiryDate: "",
    });
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold mb-4">Billing information</h2>

        {/* Input fields for billing information */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        {/* Add other billing information fields similarly */}

        <h2 className="text-2xl font-semibold mt-6 mb-4">
          Payment information
        </h2>

        {/* Input fields for payment information */}
        <div className="mb-4">
          <label
            htmlFor="cardNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        {/* Add other payment information fields similarly */}

        <div className="flex justify-between items-center">
          <button
            type="button"
            className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Proceed
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
