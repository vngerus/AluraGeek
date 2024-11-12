import React, { useState, useEffect } from 'react';
import { Product } from '../types/types';

interface ProductFormProps {
    onAddProduct: (name: string, price: number, imageUrl: string) => void;
    onUpdateProduct: (id: string, name: string, price: number, imageUrl: string) => void;
    editingProduct?: Product | null;
}

const Form: React.FC<ProductFormProps> = ({ onAddProduct, onUpdateProduct, editingProduct }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (editingProduct) {
            setName(editingProduct.name);
            setPrice(editingProduct.price.toString());
            setImageUrl(editingProduct.imageUrl);
            setIsEditing(true);
        }
    }, [editingProduct]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isEditing && editingProduct) {
            onUpdateProduct(editingProduct.id, name, parseFloat(price), imageUrl);
        } else {
            onAddProduct(name, parseFloat(price), imageUrl);
        }
        clearForm();
    };

    const clearForm = () => {
        setName('');
        setPrice('');
        setImageUrl('');
        setIsEditing(false);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg">
            <input
                type="text"
                placeholder="Nombre..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="border rounded p-2 focus:outline-none focus:border-blue-500"
            />
            <input
                type="number"
                placeholder="Precio..."
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
                className="border rounded p-2 focus:outline-none focus:border-blue-500"
            />
            <input
                type="url"
                placeholder="Imagen URL..."
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                required
                className="border rounded p-2 focus:outline-none focus:border-blue-500"
            />
            <button
                type="submit"
                className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
            >
                {isEditing ? 'Guardar Cambios' : 'Agregar Producto'}
            </button>
            <button
                type="button"
                onClick={clearForm}
                className="bg-gray-500 text-white py-2 rounded hover:bg-gray-600 transition-colors"
            >
                Limpiar
            </button>
        </form>
    );
};

export default Form;
