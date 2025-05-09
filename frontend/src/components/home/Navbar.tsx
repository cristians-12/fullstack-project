export default function Navbar() {
    return (
        <nav className="sticky md:flex top-0 bg-white items-center justify-between md:px-20 py-3">
            <figure className="w-16">
                <img src="https://back.vinapp.co//store/200x117618665-2024-04-02-16-03-46.webp" alt="" />
            </figure>

            <div>
                <button className="bg-yellow-300 px-7 py-2 rounded-2xl hidden md:block">
                    Iniciar sesion
                </button>
            </div>
        </nav>
    )
}