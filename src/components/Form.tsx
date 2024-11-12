import React, { useState } from 'react';

interface ProductFormProps {
    onAddProduct: (name: string, price: number, imageUrl: string) => void;
}

const Form: React.FC<ProductFormProps> = ({ onAddProduct }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onAddProduct(name, parseFloat(price), imageUrl);
        setName('');
        setPrice('');
        setImageUrl('');
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input type="text" placeholder="Nombre..." value={name} onChange={e => setName(e.target.value)} className="border rounded p-2" />
            <input type="number" placeholder="Precio..." value={price} onChange={e => setPrice(e.target.value)} className="border rounded p-2" />
            <input type="text" placeholder="Imagen URL..." value={imageUrl} onChange={e => setImageUrl(e.target.value)} className="border rounded p-2" />
            <button type="submit" className="bg-blue-500 text-white py-2 rounded">Enviar</button>
            <button type="reset" onClick={() => { setName(''); setPrice(''); setImageUrl(''); }} className="bg-gray-500 text-white py-2 rounded">Limpiar</button>
        </form>
    );
};

export default Form;
