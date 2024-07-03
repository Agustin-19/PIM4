"use client";
import { useCart } from "@/context/CartContext";
import Link from 'next/link';
import { useState } from "react";
import CartItem from "@/components/ItenCart";
import CartSummary from "@/components/ItenSumCart";
import { handleOrder } from "@/utils/handlerOrdes";
import { IProduct } from "@/interfaces/products.interface";

const Cart: React.FC = () => {
    const { cart, removeFromCart, clearCart } = useCart();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const getTotal = () => {
        return cart.reduce((total: number, product: IProduct) => total + product.price, 0);
    };

    if (cart.length === 0) {
        return (
            <div>
                <h1>Carrito de Compras</h1>
                <p>Aún no has agregado productos a tu carrito.</p>
                <Link href="/home">
                    <p className="w-48 mt-2 p-2 boton-color rounded">Agrega productos aquí</p>
                </Link>
            </div>
        );
    }

    return (
        <div>
            <ul>
                {cart.map((product: IProduct) => (
                    <CartItem key={product.id} product={product} removeFromCart={removeFromCart} />
                ))}
            </ul>
            <CartSummary
                total={getTotal()}
                clearCart={clearCart}
                handleOrder={() => handleOrder(cart, setLoading, setError, clearCart)}
                loading={loading}
                error={error}
            />
        </div>
    );
};

export default Cart;