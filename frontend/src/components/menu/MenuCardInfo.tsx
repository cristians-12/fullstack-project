import type { MenuItemType } from "../../types/menu/type";

export default function MenuCardInfo({ category, image, name, public_sale_value }: MenuItemType) {
    return (
        <div className="w-80 flex flex-col items-center justify-center p-3 gap-2 relative shadow rounded bg-white">
            <img
                src={image}
                alt="menu image"
                className="w-48 h-40 object-cover rounded"
            />
            <h3 className="font-bold">{name}</h3>
            <p>Precio: ${public_sale_value?.toLocaleString('es-ES')}</p>
            <div>Categoria: {category}</div>
        </div>
    )
}