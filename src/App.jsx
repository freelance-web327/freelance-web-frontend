import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./Pages/Error";
import Home from "./components/Fahim/homePage/Home";
import AdminPanel from "./components/Fahim/adminPanel/AdminPanel";
import Chat from "./components/Fahim/projectCollaboration/Chat";

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
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
