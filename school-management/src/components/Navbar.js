import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between items-center">
      <div className="text-lg font-bold">School Management</div>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">
          Home
        </Link>

        {user && (
          <Link to="/students" className="hover:underline">
            Students
          </Link>
        )}

        {!user && (
          <Link to="/login" className="hover:underline">
            Login
          </Link>
        )}

        {user && (
          <button
            onClick={logout}
            className="ml-2 bg-red-500 px-3 py-1 rounded hover:bg-red-600"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
