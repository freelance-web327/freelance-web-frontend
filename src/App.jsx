import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./Pages/Error";
import Home from "./components/Fahim/homePage/Home";
import AdminPanel from "./components/Fahim/adminPanel/AdminPanel";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
