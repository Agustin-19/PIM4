"use client"
import { AuthContext } from "@/context/AuthContext";
import { IProduct } from "@/interfaces/products.interface";
import { IOrder } from "@/interfaces/user.interface";
import Image from "next/image";
import { useContext, useEffect } from "react";

function Orders() {
    const { getOrders, orders } = useContext(AuthContext)
    useEffect(() => {
        getOrders()
    }, []);

    return (
        <div>

            {orders.length > 0 ? (
                orders.map((order: IOrder) => (
                    <div key={order.id}>
                        <div className="border-color shadow-remake border-2 m-2">
                            {order.products.map((product: IProduct) => (
                                <div key={product.id}>
                                        <div className="flex items-center justify-between space-x-4 p-4">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            width={100}
                                            height={100}
                                            className="product-image"
                                        />
                                        <p className=" font-mono font-bold text-xl">{product.name}</p>
                                        <p className=" font-mono text-xl text-[--color-primary]">${product.price}</p>
                                    </div>
                                    <div className=" flex justify-end align-middle p-4">
                                        <p className=" font-bold ">Fecha de la compra: {new Date(order.date).toLocaleDateString()}</p>
                                </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))
            ) : (
                <p>No orders found</p>
            )}
        </div>
    );
}

export default Orders;