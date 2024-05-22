import React from "react";

function Header() {
  return (
    <header className="flex justify-between items-center p-4 shadow-md">
      <div className="text-2xl font-bold">Freelance</div>
      <div className="flex space-x-4">
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          Join
        </button>
        <button className="border border-green-500 text-green-500 px-4 py-2 rounded">
          Sign In
        </button>
      </div>
    </header>
  );
}

export default Header;
