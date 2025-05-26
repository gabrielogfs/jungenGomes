import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function AdminRoute({ children }) {
  const { currentUser } = useAuth();

  if (!currentUser) return <Navigate to="/signin" replace />;
  if (currentUser.role !== "admin") return <Navigate to="/" replace />;

  return children;
}