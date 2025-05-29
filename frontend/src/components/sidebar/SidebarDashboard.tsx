import { Link } from "react-router";

export default function SidebarDashboard() {
    return (
        <div className="w-[20%] h-screen bg-gray-800 text-white ">
            <div className="p-4">
                <h1 className="text-xl font-bold"></h1>
            </div>
            <nav className="mt-4">
                <ul>
                    <li className="ps-5 p-2 hover:bg-gray-700 w-full">
                        <Link to="/menu">Menu</Link>
                    </li>
                    <li className="ps-5 p-2 hover:bg-gray-700 w-full">
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}