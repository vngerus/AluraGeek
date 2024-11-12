import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-purple-800 text-white p-4 flex justify-center items-center">
            <div className="flex items-center space-x-2">
                <img src="/heart.webp" alt="Red Heart" className="w-auto h-6" />
                <h1 className="text-xl font-bold ml-2">AluraGeek</h1>
            </div>
        </header>
    );
};

export default Header;
