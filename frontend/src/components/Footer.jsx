import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Hazrat Abul Khair Sultanpury RH Association Bangladesh (HAKSAB) - Raozan Branch. All rights reserved.</p>
                <p>Follow us on social media for updates and announcements.</p>
            </div>
        </footer>
    );
};

export default Footer;