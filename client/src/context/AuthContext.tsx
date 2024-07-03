"use client"
import { getUserOrders } from "@/lib/server/fetchUsers";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { IOrder } from '../interfaces/user.interface';


interface AuthContextType {
    token: string | null;
    user: any | null;
    setToken: (token: string | null) => void;
    setUser: (user: any | null) => void;
    logout: () => void;
    orders: IOrder[];
    getOrders: () => {};
}

export const AuthContext = createContext<AuthContextType>({
    token: '',
    user: null,
    setToken: () => { },
    setUser: () => { },
    logout: () => { },
    getOrders: async () => { },
    orders: [],
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [token, setTokenState] = useState<string | null>(null);
    const [user, setUserState] = useState<any | null>(null);
    const [orders, setOrders] = useState<IOrder[]>([]);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        const storedUser = localStorage.getItem('user');
        if (storedToken && storedUser) {
            setToken(storedToken);
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const getOrders = async () => {
        try {
            const token: string = localStorage.getItem('token') || '';

            const data = await getUserOrders(token);

            setOrders(data);
        } catch (error) {
            console.error('Error getting orders:', error);
            return [];
        }
    }

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setToken(null);
        setUser(null);
    };

    const setToken = (token: string | null) => {
        if (token) {
            localStorage.setItem("token", token);
        } else {
            localStorage.removeItem("token");
        }
        setTokenState(token);
    };

    const setUser = (user: any | null) => {
        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
        } else {
            localStorage.removeItem("user");
        }
        setUserState(user);
    };


    return (
        <AuthContext.Provider value={{ token, user, setToken, setUser, logout, orders, getOrders }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};