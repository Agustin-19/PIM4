'use client';
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Dashboard = () => {
    const { token } = useAuth();
    const router  = useRouter();

    
    useEffect(() => {
        if (!token) {
            router.push('/login');
        }
    }, [router, token]);

    return (
        <div className=" w-full p-4 ">
        </div>
    );
};

export default Dashboard;