export interface Product {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
}

export interface ProductListProps {
    products: Product[];
    onEdit: (product: Product) => void;
    onDelete: (id: string) => void;
}

export interface CardProps {
    name: string;
    price: number;
    imageUrl: string;
    onEdit: () => void; 
    onDelete: () => void; 
}

export interface ProductFormProps {
    onAddProduct: (name: string, price: number, imageUrl: string) => void;
    onUpdateProduct: (id: string, name: string, price: number, imageUrl: string) => void;
    editingProduct?: Product | null;
}