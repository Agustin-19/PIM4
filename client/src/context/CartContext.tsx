"use client";
import { createContext, useContext, useState, ReactNode } from 'react';
import { IProduct } from '@/interfaces/products.interface';
const API = 'http://localhost:3001/';

interface CartContextType {
    cart: IProduct[];
    addToCart: (product: IProduct) => void;
    removeFromCart: (productId: number) => void;
    clearCart: () => void;
}

export const CartContext = createContext<CartContextType>({
    cart: [],
    addToCart: () => { },
    removeFromCart: () => { },
    clearCart: () => { },
});

const checkout = async (cart: IProduct[]) => {
    try {
        const response = await fetch(`${API}orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ items: cart }),
        });

        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }

        const result = await response.json();
        alert('Pedido realizado con éxito');
    } catch (error) {
        console.log(error + 'Error al realizar el pedido. Inténtalo de nuevo.');
    }
}

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<IProduct[]>([]);

    const addToCart = (product: IProduct) => {
        setCart(prevCart => {
            const productExists = prevCart.some(item => item.id === product.id);
            if (productExists) {
                return prevCart;
            }
            return [...prevCart, product];
        });
    };

    const removeFromCart = (productId: number | undefined) => {
        setCart(cart.filter(product => product.id !== productId));
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};