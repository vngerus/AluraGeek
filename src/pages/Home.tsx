import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import List from '../components/List';
import Form from '../components/Form';
import { addProduct, editProduct, deleteProduct, subscribeToProducts } from '../services/firebaseService';
import { Product } from '../types/types';
import ProductModal from '../components/ProductModal';

const HomePage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [editingProduct, setEditingProduct] = useState<Product | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const unsubscribe = subscribeToProducts((data) => {
            setProducts(data);
        });
        return () => unsubscribe();
    }, []);

    const handleAddProduct = (name: string, price: number, imageUrl: string) => {
        addProduct(name, price, imageUrl);
    };

    const handleUpdateProduct = (id: string, name: string, price: number, imageUrl: string) => {
        editProduct(id, { name, price, imageUrl });
        setIsModalOpen(false);
    };

    const handleDeleteProduct = (id: string) => {
        deleteProduct(id);
    };

    const openEditModal = (product: Product) => {
        setEditingProduct(product);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEditingProduct(null);
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-300 ">
            <Header />
            <main className="flex-grow container mx-auto p-4 ">
                <div className="flex flex-col lg:flex-row gap-8 mt-4">
                    <div className="order-1 lg:order-2 lg:w-1/3 w-full ">
                        <h2 className="text-2xl font-bold font-lomo mb-4 text-center  uppercase">Agregar Producto:</h2>
                        <Form onAddProduct={handleAddProduct} onUpdateProduct={handleUpdateProduct} editingProduct={editingProduct} />
                    </div>
                    <div className="order-2 lg:order-1 lg:w-2/3 w-full flex flex-col items-center">

                        <h2 className="text-2xl font-bold font-lomo mb-4 text-center uppercase w-full">Mis Productos:</h2>
                        <List products={products} onEdit={openEditModal} onDelete={handleDeleteProduct} />
                    </div>
                </div>
            </main>
            <Footer />
            {isModalOpen && editingProduct && (
                <ProductModal
                    product={editingProduct}
                    onUpdate={handleUpdateProduct}
                    onClose={closeModal}
                />
            )}
        </div>
    );
};

export default HomePage;
