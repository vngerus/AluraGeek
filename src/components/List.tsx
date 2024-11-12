import React from 'react';
import Card from './Card';


interface Product {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
}

interface ProductListProps {
    products: Product[];
}

const List: React.FC<ProductListProps> = ({ products }) => {
    return (
        <div className="grid grid-cols-3 gap-4">
            {products.map(product => (
                <Card key={product.id} name={product.name} price={product.price} imageUrl={product.imageUrl} />
            ))}
        </div>
    );
};

export default List;
