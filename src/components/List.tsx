import React, { useState } from 'react';
import Card from './Card';
import { ProductListProps } from '../types/types';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const List: React.FC<ProductListProps> = ({ products, onEdit, onDelete }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const totalPages = Math.ceil(products.length / itemsPerPage);

    return (
        <div>
            <div className="flex items-center justify-center gap-4 mt-4">
                <button
                    className="px-4 py-2 bg-gray-900 text-white rounded-md disabled:opacity-50"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    <FiChevronLeft size={20} />
                </button>

                <span className="text-lg">
                    Página {currentPage} de {totalPages}
                </span>

                <button
                    className="px-4 py-2 bg-gray-900 text-white rounded-md disabled:opacity-50"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    <FiChevronRight size={20} />
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {currentProducts.map((product) => (
                    <div key={product.id} className="mb-6">
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

        </div>
    );
};

export default List;
