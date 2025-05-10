import { useState } from "react"
import type { UserFormType } from "../../../types/register/type";
import { BASE_URL } from "../../../utils/constants";
import Navbar from "../../../components/home/Navbar";
import toast from "react-hot-toast";

export default function RegisterPage() {

    const [form, setForm] = useState<UserFormType>({
        email: '',
        confirmPassword: '',
        password: ''
    });

    const notify = (message: string) => toast.success(message);

    const register = async () => {
        const response = await fetch(`${BASE_URL}users`, {
            method: 'POST',
            body: JSON.stringify({
                email: form.email,
                password: form.password,
                role: 'user'
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json();
        console.log(data)
        notify(data.message)
    }

    return (
        <>
            <Navbar />
            <main>
                <section className="min-h-screen flex items-center justify-center">
                    <div className="flex flex-col gap-5 bg-yellow-400 p-5 pb-20 rounded-2xl">
                        <input className="border bg-white border-black px-10 py-2 rounded-2xl" placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} type="text" />
                        <input className="border bg-white border-black px-10 py-2 rounded-2xl" placeholder="Contraseña" onChange={(e) => setForm({ ...form, password: e.target.value })} type="text" />
                        <input className="border bg-white border-black px-10 py-2 rounded-2xl" placeholder="Confirma tu contraseña" onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })} type="text" />
                        <button onClick={register} className="cursor-pointer">Registrame!</button>
                    </div>
                </section>
            </main>
        </>
    )
}