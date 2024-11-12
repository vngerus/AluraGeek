import React, { useEffect, useState } from 'react';
import { ProductFormProps } from '../types/types';
import { BackgroundGradient } from './ui/background-gradient';

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
        <div className='mt-[68px]'>
            <BackgroundGradient className="rounded-[22px] p-6 sm:p-10 bg-gray-800">
                <form onSubmit={handleSubmit} className="flex flex-col items-center gap-6 p-6 rounded-lg max-w-sm mx-auto">

                    <input
                        type="text"
                        placeholder="Nombre..."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full p-2 border-2 bg-gray-900 border-blue-500 rounded-md text-lg text-white font-lomo focus:outline-none focus:border-blue-700 placeholder-white"
                    />

                    <input
                        type="number"
                        placeholder="Precio..."
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                        className="w-full p-2 border-2 bg-gray-900 border-blue-500 rounded-md text-lg text-white font-lomo focus:outline-none focus:border-blue-700 placeholder-white"
                    />

                    <input
                        type="url"
                        placeholder="URL de la imagen"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        required
                        className="w-full p-2 border-2 bg-gray-900 border-blue-500 rounded-md text-lg text-white font-lomo focus:outline-none focus:border-blue-700 placeholder-white"
                    />

                    <div className="flex gap-4 w-full">
                        <button
                            type="submit"
                            className="w-full py-2 border-2 border-blue-500 text-blue-500 rounded-md font-lomo text-lg hover:text-white hover:bg-blue-600 transition-all"
                        >
                            {isEditing ? 'Guardar Cambios' : 'Enviar'}
                        </button>
                        <button
                            type="button"
                            onClick={clearForm}
                            className="w-full py-2 border-2 border-red-500 text-red-500 rounded-md font-lomo text-lg hover:bg-red-500 hover:text-white transition-all"
                        >
                            Limpiar
                        </button>
                    </div>
                </form>
            </BackgroundGradient>
        </div>
    );
};

export default Form;
