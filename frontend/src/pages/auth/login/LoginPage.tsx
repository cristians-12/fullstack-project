import { useState } from "react"
import type { UserFormType } from "../../../types/register/type";
import { BASE_URL } from "../../../utils/constants";
import Navbar from "../../../components/home/Navbar";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export default function LoginPage() {

    const [form, setForm] = useState<UserFormType>({
        email: '',
        password: ''
    });

    const notify = (message: string) => toast.success(message);

    const navigation = useNavigate();

    const login = async () => {
        try {
            const response = await fetch(`${BASE_URL}auth/login`, {
                method: 'POST',
                body: JSON.stringify({
                    email: form.email,
                    password: form.password
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include' // Importante para manejar cookies
            });

            const data = await response.json();
            if (response.ok) {
                notify('Inicio de sesión exitoso');
                console.log('Login exitoso:', data);
                // Redirigir a una página protegida o dashboard
                navigation('/dashboard');
            } else {
                toast.error(data.message || 'Error al iniciar sesión');
            }
        } catch (error) {
            toast.error('Error al conectar con el servidor');
            console.error('Error en login:', error);
        }
    };

    return (
        <>
            <Navbar />
            <main>
                <section className="min-h-screen flex items-center justify-center">
                    <div className="flex flex-col gap-5 bg-yellow-400 p-5 pb-20 rounded-2xl">
                        <input className="border bg-white border-black px-10 py-2 rounded-2xl" placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} type="text" />
                        <input className="border bg-white border-black px-10 py-2 rounded-2xl" placeholder="Contraseña" onChange={(e) => setForm({ ...form, password: e.target.value })} type="text" />
                        {/* <input className="border bg-white border-black px-10 py-2 rounded-2xl" placeholder="Confirma tu contraseña" onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })} type="text" /> */}
                        <button onClick={login} className="cursor-pointer">Iniciar sesion</button>
                    </div>
                </section>
            </main>
        </>
    )
}