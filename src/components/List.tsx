import React from 'react';
import Card from './Card';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { Product } from '../types/types';

interface ProductListProps {
    products: Product[];
    onEdit: (product: Product) => void;
    onDelete: (id: string) => void;
}

const List: React.FC<ProductListProps> = ({ products, onEdit, onDelete }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
                <div key={product.id} className="relative">
                    <Card name={product.name} price={product.price} imageUrl={product.imageUrl} />
                    <div className="absolute top-[250px] right-2 flex gap-2">
                        <button onClick={() => onEdit(product)} className="text-blue-500 hover:text-blue-700">
                            <FiEdit size={20} />
                        </button>
                        <button onClick={() => onDelete(product.id)} className="text-red-500 hover:text-red-700">
                            <FiTrash2 size={20} />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default List;
