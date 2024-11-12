import React from 'react';
import Card from './Card';
import { ProductListProps } from '../types/types';

const List: React.FC<ProductListProps> = ({ products, onEdit, onDelete }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {products.map((product) => (
                <div
                    key={product.id}
                    className=""
                >
                    <Card
                        name={product.name}
                        imageUrl={product.imageUrl}
                        price={product.price}
                        onEdit={() => onEdit(product)}
                        onDelete={() => onDelete(product.id)}
                    />
                </div>
            ))}
        </div>
    );
};

export default List;
