'use client';

import Link from "next/link";
import React, { useState } from 'react';

const DashboardNavbar = () => {
    const [activeButton, setActiveButton] = useState('/dashboard/you');

    const handleButtonClick = (path: string) => {
        setActiveButton(path);
    };

    return (
        <nav className="fixed top-11 left-0 right-0 mx-10 border-color border-2 shadow-remake">

            <nav>
                <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-2">
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row rtl:space-x-reverse md:mt-0 md:border-0">
                            <li>
                                <Link href="/dashboard/you"
                                    className={`nav-button ${activeButton === '/dashboard/you' ? 'active' : ''}`} onClick={() => handleButtonClick('/dashboard/you')}>
                                    Profile

                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard/orders"
                                    className={`nav-button nav-button-r ${activeButton === '/dashboard/orders' ? 'active' : ''}`} onClick={() => handleButtonClick('/dashboard/orders')}>
                                    Orders

                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </nav>

    );
};

export default DashboardNavbar;