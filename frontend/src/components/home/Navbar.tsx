import { Link } from "react-router";
import { userStore } from "../../store/user/store";
import { CiUser } from "react-icons/ci";
import { IoIosMenu } from "react-icons/io";

interface Props {
    clickMenu?: () => void;
}

export default function Navbar({ clickMenu }: Props) {
    const { user } = userStore();
    return (
        <nav className="sticky flex md:flex top-0 bg-white items-center justify-between px-5 md:px-20 py-3">
            <Link to={'/'} className="w-24 block md:w-16">
                <img src="https://back.vinapp.co//store/200x117618665-2024-04-02-16-03-46.webp" alt="" />
            </Link>

            <div className="flex gap-5 items-center">
                {
                    user ?
                        (
                            <>
                                <div className="bg-yellow-300 px-7 py-2 rounded-2xl hidden md:block cursor-pointer">
                                    Cerrar sesion
                                </div>
                                <Link to={'/dashboard'} className="bg-yellow-300 px-7 py-2 rounded-2xl hidden md:block">
                                    Ir a dashboard
                                </Link>
                            </>
                        )
                        :
                        (

                            <Link to={'/auth/login'} className="bg-yellow-300 px-7 py-2 rounded-2xl hidden md:flex items-center gap-3">
                                <CiUser size={25} />
                                Iniciar sesion
                            </Link>
                        )
                }
                {/* <Link to={'/auth/register'} className="bg-yellow-300 px-7 py-2 rounded-2xl hidden md:block">
                    Registrate
                </Link> */}
            </div>
            {/* {user && (
                <div>
                    <span>Hola {user.email}</span>
                </div>
            )} */}
            <figure onClick={clickMenu} className="md:hidden block">
                <IoIosMenu size={40} />
            </figure>
        </nav>
    )
}