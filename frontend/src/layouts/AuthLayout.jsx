import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-blue-600 text-white p-4 text-center">
                <h1 className="text-2xl font-bold">Welcome to HAKSAB</h1>
                <p className="text-lg">Please log in or register to continue</p>
            </header>
            <main className="flex-grow flex items-center justify-center">
                <Outlet />
            </main>
            <footer className="bg-gray-800 text-white p-4 text-center">
                <p>&copy; {new Date().getFullYear()} HAKSAB. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default AuthLayout;