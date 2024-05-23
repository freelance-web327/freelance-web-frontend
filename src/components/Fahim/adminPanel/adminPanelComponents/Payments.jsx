import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  approveOrRejectPayment,
  getProjects,
} from "../../../../features/actions/adminActions";

/**
 * Payments component.
 * @returns {JSX.Element} Payments UI.
 */
const Payments = () => {
  const dispatch = useDispatch();
  const payments = useSelector((state) => state.payments);

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  const handleStatusChange = (paymentId, status) => {
    dispatch(approveOrRejectPayment(paymentId, status));
  };

  return (
    <div>
      <h2>Payments</h2>
      <ul>
        {payments.map((payment) => (
          <li key={payment._id}>
            {payment.amount} - {payment.status}
            {payment.status === "pending" && (
              <div>
                <button
                  onClick={() => handleStatusChange(payment._id, "success")}
                >
                  Approve
                </button>
                <button
                  onClick={() => handleStatusChange(payment._id, "rejected")}
                >
                  Reject
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Payments;
