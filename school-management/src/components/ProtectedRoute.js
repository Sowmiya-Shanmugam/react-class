import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children, roles }) {
  const { user } = useAuth();

  if (!user) {
    // not logged in → go to login
    return <Navigate to="/login" replace />;
  }

  if (roles && !roles.includes(user.role)) {
    // logged in but role not allowed → show unauthorized page
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
}
