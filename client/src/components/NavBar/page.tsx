"use client";

import Link from "next/link";
import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import ModeSwitch from "@/components/ModeSwitch";

const Navbar = () => {
    const { token, user, logout } = useAuth();
    const [activeButton, setActiveButton] = useState('/home');

    const handleButtonClick = (path: string) => {
        setActiveButton(path);
    };

    return (
        <nav className="fixed w-full border-color border-b-2 border-t-2 shadow-remake">
            <div className="daisy-navbar -mt-[12px] ">
                <div className="flex mr-8 items-center">
                    <Link href={"/home"} className="daisy-btn daisy-btn-ghost text-xl">
                        Olga Store
                    </Link>
                </div>
                <div className="flex w-full justify-center align-middle content-center">
                    <div className="">
                        <ul>

                            <li>
                                <Link href={"/home"}
                                    className={`nav-button ${activeButton === '/home' ? 'active' : ''}`}
                                    onClick={() => handleButtonClick('/home')}
                                >
                                    Home
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className=" mr-5 ">
                        {token ? (
                            <>
                                <div className="flex justify-center align-middle ">
                                    <div tabIndex={0} className="flex align-middle">
                                        <div className={`indicator nav-button ${activeButton === '/cart' ? 'active' : ''}`}>
                                            <Link href={"/cart"}
                                                onClick={() => handleButtonClick('/cart')}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className=" flex items-center">
                                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                            <div className="w-auto">
                                                <Link href="/dashboard/you"
                                                    className={`nav-button ${activeButton === '/dashboard/you' ? 'active' : ''}`}
                                                    onClick={() => handleButtonClick('/dashboard/you')}
                                                >
                                                    {user.name}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" flex items-center">
                                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                            <div>
                                                <a onClick={logout}
                                                    className='nav-button nav-button-r'
                                                >
                                                    Salir
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="flex justify-center align-middle mx-2 ">
                                    <div tabIndex={0} className=" flex align-middle">
                                        <div className="indicator">
                                            <Link href="/login"
                                                className={`nav-button ${activeButton === '/login' ? 'active' : ''}`}
                                                onClick={() => handleButtonClick('/login')}
                                            >
                                                Ingresar
                                            </Link>
                                            <Link href="/register"
                                                className={`nav-button nav-button-r  ${activeButton === '/register' ? 'active' : ''}`}
                                                onClick={() => handleButtonClick('/register')}
                                            >
                                                Registrarse
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                    <div className=" absolute right-0 mt-2 mr-[30px] ">
                        <ModeSwitch />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
