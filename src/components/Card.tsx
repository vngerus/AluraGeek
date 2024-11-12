import React from 'react';

interface ProductCardProps {
    name: string;
    price: number;
    imageUrl: string;
}

const Card: React.FC<ProductCardProps> = ({ name, price, imageUrl }) => {
    return (
        <div className="border rounded-lg shadow-md p-4 bg-purple-700 text-white">
            <img src={imageUrl} alt={name} className="w-full h-48 object-cover rounded" />
            <h3 className="mt-2 text-lg font-semibold">{name}</h3>
            <p className="text-sm">${price.toFixed(2)}</p>
        </div>
    );
};

export default Card;
