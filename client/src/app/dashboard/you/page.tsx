'use client'

import { useContext, useEffect } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const Profile = () => {
    const { user, logout, token } = useContext(AuthContext);
    const router = useRouter();

    useEffect(() => {
        if (!token) {
            router.push('/login');
        }
    }, [router, token]);


    
    if (!user) {
        return <div>Cargando...</div>;
    }

    const getInitials = (name: string) => {
        const nameParts = name.split(' ');
        const initials = nameParts.map(part => part[0]).join('');
        return initials.substring(0, 2).toUpperCase();
    };

    return (
        <div className="w-full p-4 flex flex-col items-center">
        <div className="flex items-center space-x-4 card-profile p-4 rounded shadow-md w-10/12 border-color border-2">
            <div className="initials-circle bg-[--color-primary] text-black flex items-center justify-center rounded-full w-16 h-16 text-2xl font-bold">
                {getInitials(user.name)}
            </div>
            <div>
                <p className="text-xl font-semibold"><strong>Nombre:</strong> {user.name}</p>
                <p className="text-lg"><strong>Dirección:</strong> {user.address}</p>
            </div>
        </div>
        <div className="card-profile p-4 rounded shadow-md w-10/12 mt-4 border-color border-2">
            <p className="text-lg"><strong>Email:</strong> {user.email}</p>
            <p className="text-lg"><strong>Teléfono:</strong> {user.phone}</p>
        </div>
        <button className="mt-4 p-2 bg-[--color-secondary] text-black rounded shadow-md" onClick={logout}>
            Cerrar sesión
        </button>
    </div>
    );
};

export default Profile;