"use client";
import { useCart } from "@/context/CartContext";
import Link from 'next/link';
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import CartItem from "@/components/ItenCart";
import CartSummary from "@/components/ItenSumCart";
import { handleOrder } from "@/utils/handlerOrdes";
import { IProduct } from "@/interfaces/products.interface";
import { useRouter } from "next/navigation";

const Cart: React.FC = () => {
    const { token } = useAuth();
    const { cart, removeFromCart, clearCart } = useCart();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter()


    useEffect(() => {
        if (!token) {
            router.push('/login');
        }
    }, [router, token]);

    const getTotal = () => {
        return cart.reduce((total: number, product: IProduct) => total + product.price, 0);
    };

    if (!token) return null;

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
