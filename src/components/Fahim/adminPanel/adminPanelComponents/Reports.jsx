import React,{ useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getLogs,
  handleReport,
} from "../../../../features/actions/adminActions";

/**
 * Reports component.
 * @returns {JSX.Element} Reports UI.
 */
const Reports = () => {
  const dispatch = useDispatch();
  const reports = useSelector((state) => state.reports);

  useEffect(() => {
    dispatch(getLogs());
  }, [dispatch]);

  const handleStatusChange = (reportId, status) => {
    dispatch(handleReport(reportId, status));
  };

  return (
    <div>
      <h2>Reports</h2>
      <ul>
        {reports.map((report) => (
          <li key={report._id}>
            {report.reason} - {report.status}
            {report.status === "pending" && (
              <div>
                <button
                  onClick={() => handleStatusChange(report._id, "resolved")}
                >
                  Resolve
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reports;
