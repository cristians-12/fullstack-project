import type { JSX } from 'react';
import { useLocation, useNavigate } from 'react-router';

interface AuthMiddlewareProps {
    children: JSX.Element;
}

export default function AuthMiddleware({ children }: AuthMiddlewareProps) {
    const isAuthenticated = Boolean(localStorage.getItem('authToken')); // Ejemplo de verificación
    const navigate = useNavigate();
    const location = useLocation();

    if (!isAuthenticated) {
        // Redirigir al usuario a la página de login
        navigate('/login', { state: { from: location } });
        return null; // No renderizar nada mientras se redirige
    }

    return children;
}