import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">
                    HAKSAB-Raozan
                </div>
                <div className="space-x-4">
                    <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
                    <Link to="/dashboard" className="text-gray-300 hover:text-white">Dashboard</Link>
                    <Link to="/events" className="text-gray-300 hover:text-white">Events</Link>
                    <Link to="/members" className="text-gray-300 hover:text-white">Members</Link>
                    <Link to="/finance" className="text-gray-300 hover:text-white">Finance</Link>
                    <Link to="/notices" className="text-gray-300 hover:text-white">Notices</Link>
                    <Link to="/reports" className="text-gray-300 hover:text-white">Reports</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;