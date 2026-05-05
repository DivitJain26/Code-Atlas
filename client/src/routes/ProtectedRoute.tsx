import { Navigate, Outlet} from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// This component checks if the user is authenticated. If not, it redirects to the login page.
const ProtectedRoute = () => {
    const { state } = useAuth();
    const { isAuthenticated } = state;

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace/>;
};

export default ProtectedRoute;