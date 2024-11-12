import React, { useState } from 'react';
import { Product } from '../types/types';

interface EditProductModalProps {
    product: Product;
    onUpdate: (id: string, name: string, price: number, imageUrl: string) => void;
    onClose: () => void;
}

const ProductModal: React.FC<EditProductModalProps> = ({ product, onUpdate, onClose }) => {
    const [name, setName] = useState(product.name);
    const [price, setPrice] = useState(product.price.toString());
    const [imageUrl, setImageUrl] = useState(product.imageUrl);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onUpdate(product.id, name, parseFloat(price), imageUrl);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4">Editar Producto</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input type="text" placeholder="Nombre..." value={name} onChange={(e) => setName(e.target.value)} required className="border rounded p-2" />
                    <input type="number" placeholder="Precio..." value={price} onChange={(e) => setPrice(e.target.value)} required className="border rounded p-2" />
                    <input type="url" placeholder="Imagen URL..." value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required className="border rounded p-2" />
                    <div className="flex gap-2 mt-4">
                        <button type="submit" className="bg-blue-500 text-white py-2 rounded w-full">Guardar Cambios</button>
                        <button type="button" onClick={onClose} className="bg-gray-500 text-white py-2 rounded w-full">Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProductModal;
