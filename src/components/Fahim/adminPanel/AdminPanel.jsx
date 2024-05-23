import { useState } from "react";
import Dashboard from "./adminPanelComponents/Dashboard";
import Users from "./adminPanelComponents/Users";
import Reports from "./adminPanelComponents/Reports";
import Payments from "./adminPanelComponents/Payments";
import Projects from "./adminPanelComponents/Projects";
import { Provider } from "react-redux";
import store from "../../../store/index";

/**
 * Main App component.
 * @returns {JSX.Element} Main App UI.
 */
const App = () => {
  const [activeComponent, setActiveComponent] = useState("Dashboard");

  const renderComponent = () => {
    switch (activeComponent) {
      case "Dashboard":
        return <Dashboard />;
      case "Users":
        return <Users />;
      case "Reports":
        return <Reports />;
      case "Payments":
        return <Payments />;
      case "Projects":
        return <Projects />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Provider store={store}>
      <div className="flex bg-[#f0eeee]">
        <aside className="w-64 h-[96vh] m-5 bg-[#FFFFFF] rounded-sm">
          <div className="p-4">
            <h1 className="text-2xl font-bold">Admin Panel</h1>
            <nav className="mt-10">
              <ul>
                <li>
                  <button
                    onClick={() => setActiveComponent("Dashboard")}
                    className="block p-2 w-full text-left"
                  >
                    Dashboard
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveComponent("Users")}
                    className="block p-2 w-full text-left"
                  >
                    Users
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveComponent("Reports")}
                    className="block p-2 w-full text-left"
                  >
                    Reports
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveComponent("Payments")}
                    className="block p-2 w-full text-left"
                  >
                    Payments
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveComponent("Projects")}
                    className="block p-2 w-full text-left"
                  >
                    Projects
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
        <main className="flex-1 p-4">{renderComponent()}</main>
      </div>
    </Provider>
  );
};

export default App;
