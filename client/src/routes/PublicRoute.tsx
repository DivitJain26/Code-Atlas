import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import LoadingSpinner from "../components/common/LodingSpinner";

const PublicRoute = () => {
    const { state } = useAuth();
    const { isAuthenticated, isLoading } = state;

    if (isLoading) {
        return <LoadingSpinner />;
    }

    return !isAuthenticated ? <Outlet /> : <Navigate to="/experiments" replace />;
};

export default PublicRoute;