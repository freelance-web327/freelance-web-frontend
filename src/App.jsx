import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./Pages/Error";
import Home from "./components/Fahim/homePage/Home";
import AdminPanel from "./components/Fahim/adminPanel/AdminPanel";
import Chat from "./components/Fahim/projectCollaboration/Chat";
import PaymentForm from "./components/Jahid/PaymentForm";
import AdvanceSearch from "./components/Jahid/AdvanceSearch";
import ProjectPosting from "./components/Emon/ProjectPosting";
import ProjectListing from "./components/Emon/ProjectListing";
import Profile from "./components/Nafesh/Profile";
import FreelancerProposal from "./components/Emon/FreelancerProposal";


/**
 * Main application component.
 *
 * @returns {JSX.Element} The Router component with defined routes.
 *
 */

/**
 * Main application component.
 *
 * @returns {JSX.Element} The Router component with defined routes.
 *
 */

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/chat" element={<Chat />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/payment" element={<PaymentForm />} />
        <Route path="/search" element={<AdvanceSearch />} />
        <Route path="/projects" element={<ProjectListing />} />
        <Route path="/projects/posting" element={<ProjectPosting />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/projects/proposal" element={<FreelancerProposal />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
