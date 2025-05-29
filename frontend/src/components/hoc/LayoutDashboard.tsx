import Navbar from "../home/Navbar";
import SidebarDashboard from "../sidebar/SidebarDashboard";

export default function LayoutDashboard({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Navbar />
            <div className="flex">
                <SidebarDashboard />
                {children}
            </div>
        </div>
    )
}