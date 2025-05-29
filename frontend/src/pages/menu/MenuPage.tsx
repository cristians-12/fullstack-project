import { useEffect, useState } from "react";
import LayoutDashboard from "../../components/hoc/LayoutDashboard";
import type { MenuItemType } from "../../types/menu/type";
import { BASE_URL } from "../../utils/constants";
import { api_options } from "../../utils/api";
import MenuCardInfo from "../../components/menu/MenuCardInfo";

export default function MenuPage() {

    const [menu, setMenu] = useState<MenuItemType[]>([]);

    const getMenu = async () => {
        const response = await fetch(`${BASE_URL}menu`, api_options)
        const data = await response.json();
        console.log(data)
        setMenu(data);
    }

    useEffect(
        () => {
            getMenu();
        }, []
    )

    return (
        <LayoutDashboard>
            <main className="w-full">
                <h2 className="text-center font-bold text-3xl">Mi menu</h2>
                {
                    menu.length > 0 ? (
                        <div className="flex gap-10">
                            {menu.map((item) => (
                                <MenuCardInfo {...item} key={item.id} />
                            ))}
                        </div>
                    ) : (
                        <p>No hay items en el menú.</p>
                    )
                }
            </main>
        </LayoutDashboard>
    )
}