import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white text-center p-4 mt-8">
            <div className="flex flex-col items-center">
                <div className="flex items-center space-x-2 mb-2">
                    <img src="/heart.webp" alt="Red Heart" className="w-auto h-6" />
                    <h1 className="text-lg font-bold ml-2 font-lomo">AluraGeek</h1>
                </div>
                <p className="text-sm">Desarrollado por vngerus</p>
                <p className="text-sm">Alura Latam - 2024</p>
            </div>
        </footer>
    );
};

export default Footer;
