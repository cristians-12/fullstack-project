import { useEffect, useState } from "react";
import Navbar from "../../components/home/Navbar";
import type { SaleType } from "../../types/venta/type";
import { BASE_URL } from "../../utils/constants";

export default function DashboardPage() {

    const [sale, setSale] = useState<SaleType>({
        cuantity: 0,
        investment_value: 0,
        production_value: 0,
        public_sale_value: 0,
        name: ''
    })
    const [sales, setSales] = useState<SaleType[]>([]);


    const obtenerVentas = async () => {
        const response = await fetch(`${BASE_URL}sale`, {
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        setSales(data);
        console.log(data);
    }

    const formatNumber = (value: number, decimals: number = 2): string => {
        return new Intl.NumberFormat('es-CO', {
            style: 'decimal',
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
        }).format(value);
    };

    const crearVenta = async () => {
        const response = await fetch(`${BASE_URL}sale`, {
            method: 'POST',
            body: JSON.stringify(sale),
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include'
        });
        const data = await response.json();
        console.log(data);
        obtenerVentas();
    }

    useEffect(
        () => {
            obtenerVentas();
        }, []
    )



    return (
        <>
            <Navbar />
            <main>
                <div className="grid grid-cols-8 border border-black">
                    <div className="px-4 py-1 border-r border-black">Nombre</div>
                    <div className="px-4 py-1 border-r border-black">Valor de producción</div>
                    <div className="px-4 py-1 border-r border-black">Valor venta público</div>
                    <div className="px-4 py-1 border-r border-black">Cantidad</div>
                    <div className="px-4 py-1 border-r border-black">Valor de inversion</div>
                    <div className="px-4 py-1 border-r border-black">Venta bruta</div>
                    <div className="px-4 py-1 border-r border-black">Ganancia</div>
                    <div className="px-4 py-1">Porcentaje ganancia</div>
                </div>
                {
                    sales.length > 0 ? (
                        sales.map((sale, index) => (
                            <div key={index} className="grid grid-cols-8 border border-black border-t-0">
                                <div className="px-4 py-1 border-r border-black">{sale.name}</div>
                                <div className="px-4 py-1 border-r border-black">{formatNumber(Number(sale.production_value), 3)}</div>
                                <div className="px-4 py-1 border-r border-black">{formatNumber(Number(sale.public_sale_value), 3)}</div>
                                <div className="px-4 py-1 border-r border-black">{sale.cuantity}</div>
                                <div className="px-4 py-1 border-r border-black">{formatNumber(Number(sale.investment_value), 3)}</div>
                                <div className="px-4 py-1 border-r border-black">{formatNumber(Number(sale.gross_sale), 3)}</div>
                                <div className="px-4 py-1 border-r border-black">{sale.profit}</div>
                                <div className="px-4 py-1">{sale.profit_percentage}%</div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-4">No hay ventas registradas</div>
                    )
                }
                <div className="grid grid-cols-8 border border-black border-t-0">
                    <div className="px-4 py-1 border-r border-black">
                        <input onChange={(e) => setSale({ ...sale, name: e.target.value })} type="text" placeholder="Ingresa el nombre" className="w-full border border-gray-300 rounded p-1" />
                    </div>
                    <div className="px-4 py-1 border-r border-black">
                        <input onChange={(e) => setSale({ ...sale, production_value: Number(e.target.value) })} type="number" placeholder="Valor de producción" className="w-full border border-gray-300 rounded p-1" />
                    </div>
                    <div className="px-4 py-1 border-r border-black">
                        <input onChange={(e) => setSale({ ...sale, public_sale_value: Number(e.target.value) })} type="number" placeholder="Valor venta público" className="w-full border border-gray-300 rounded p-1" />
                    </div>
                    <div className="px-4 py-1 border-r border-black">
                        <input onChange={(e) => setSale({ ...sale, cuantity: Number(e.target.value) })} type="number" placeholder="Cantidad" className="w-full border border-gray-300 rounded p-1" />
                    </div>
                    <div className="px-4 py-1 border-r border-black">
                        <input onChange={(e) => setSale({ ...sale, investment_value: Number(e.target.value) })} type="number" placeholder="Inversion" className="w-full border border-gray-300 rounded p-1" />
                    </div>
                    <div className="px-4 py-1 border-r border-black">
                        {/* <input onChange={(e) => setSale({ ...sale, gross_sale: Number(e.target.value) })} type="number"  placeholder="Venta bruta" className="w-full border border-gray-300 rounded p-1" /> */}
                    </div>
                    <div className="px-4 py-1 border-r border-black">
                        {/* <input type="text" placeholder="Ganancia" className="w-full border border-gray-300 rounded p-1" /> */}
                    </div>
                    <div className="px-4 py-1">
                        {/* <input type="text" placeholder="Porcentaje ganancia" className="w-full border border-gray-300 rounded p-1" /> */}
                    </div>
                </div>
                <button onClick={crearVenta}>
                    Crear venta
                </button>
            </main>
        </>
    );
}