import React, { useState } from 'react';
import Header from '../components/Header';

import Footer from '../components/Footer';
import List from '../components/List';
import Form from '../components/Form';

interface Product {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
}

const HomePage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([
        { id: 1, name: 'Stormtrooper', price: 60.00, imageUrl: '/path/to/stormtrooper.jpg' },
        { id: 2, name: 'Game Boy Classic', price: 60.00, imageUrl: '/path/to/gameboy.jpg' },
    ]);

    const addProduct = (name: string, price: number, imageUrl: string) => {
        const newProduct = { id: Date.now(), name, price, imageUrl };
        setProducts([...products, newProduct]);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow container mx-auto p-4">
                <div className="flex gap-8 mt-4">
                    <div className="w-2/3">
                        <h2 className="text-2xl font-bold mb-4">Mis Productos:</h2>
                        <List products={products} />
                    </div>
                    <div className="w-1/3">
                        <h2 className="text-2xl font-bold mb-4">Agregar Producto:</h2>
                        <Form onAddProduct={addProduct} />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;
