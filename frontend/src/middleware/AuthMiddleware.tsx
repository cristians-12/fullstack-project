import { JSX, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { userStore } from '../store/user/store';
import { BASE_URL } from '../utils/constants';

interface AuthMiddlewareProps {
    children: JSX.Element;
}

export default function AuthMiddleware({ children }: AuthMiddlewareProps) {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null); // Estado para verificar autenticación
    const [loading, setLoading] = useState(true); // Estado de carga mientras se verifica
    const navigate = useNavigate();
    const location = useLocation();
    const { setNoToken, setHasToken } = userStore();

    useEffect(() => {
        const checkAuthentication = async () => {
            try {
                const response = await fetch(`${BASE_URL}auth/profile`, { // Ajusta la URL según tu backend
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                });

                if (response.ok) {
                    setIsAuthenticated(true);
                    setHasToken(); 
                } else {
                    setIsAuthenticated(false);
                    setNoToken();
                    navigate('/auth/login', { state: { from: location } }); // Redirige a login
                }
            } catch (error) {
                console.error('Error verificando autenticación:', error);
                setIsAuthenticated(false);
                setNoToken();
                navigate('/auth/login', { state: { from: location } });
            } finally {
                setLoading(false); // Termina la carga
            }
        };

        checkAuthentication();
    }, [navigate, location, setHasToken, setNoToken]);

    if (loading) {
        return <div>Cargando...</div>; // Muestra un loader mientras se verifica la autenticación
    }

    if (!isAuthenticated) {
        return null; // No renderiza nada si no está autenticado (ya se redirigió a login)
    }

    return children; // Renderiza los hijos si está autenticado
}