import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between items-center p-4 shadow-md">
      <div className="text-2xl font-bold">Freelance</div>
      <div className="flex space-x-4">
        <Link
          to="/register"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Join
        </Link>
        <Link
          to="/login"
          className="border border-green-500 text-green-500 px-4 py-2 rounded"
        >
          Sign In
        </Link>
      </div>
    </header>
  );
}

export default Header;
