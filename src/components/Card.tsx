import React from 'react';
import { BackgroundGradient } from './ui/background-gradient';
import { CardProps } from '../types/types';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

const Card: React.FC<CardProps> = ({ name, price, imageUrl, onEdit, onDelete }) => {
    return (
        <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-black flex flex-col min-h-[300px]">
            <div
                className="w-full h-40 bg-cover bg-center rounded-lg mb-4"
                style={{ backgroundImage: `url(${imageUrl})` }}
            ></div>

            <div className="flex flex-col justify-between flex-grow font-lomo font-light">
                <p className="text-xs sm:text-sm text-white mt-4 mb-2 truncate" title={name}>
                    {name}
                </p>

                <p className="text-xs sm:text-sm text-neutral-400 mb-4 truncate" title={`Precio: $${price !== undefined ? price.toFixed(2) : 'N/A'}`}>
                    Precio: ${price !== undefined ? price.toFixed(2) : 'N/A'}
                </p>

                <div className="flex justify-center gap-4 mt-auto">
                    <button
                        onClick={onEdit}
                        className="text-blue-500 hover:text-blue-700"
                    >
                        <FiEdit size={20} />
                    </button>
                    <button
                        onClick={onDelete}
                        className="text-red-500 hover:text-red-700"
                    >
                        <FiTrash2 size={20} />
                    </button>
                </div>
            </div>
        </BackgroundGradient>
    );
};

export default Card;
