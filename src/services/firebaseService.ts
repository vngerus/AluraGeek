import { db } from "../../firebaseConfig";
import { ref, push, onValue, update, remove, off, DataSnapshot } from "firebase/database";
import { Product } from "../types/types";

export const addProduct = (name: string, price: number, imageUrl: string): void => {
  const productsRef = ref(db, "productos");
  const newProduct = { name, price, imageUrl };
  push(productsRef, newProduct);
};

export const editProduct = (id: string, updatedProduct: Omit<Product, "id">): void => {
  const productRef = ref(db, `productos/${id}`);
  update(productRef, updatedProduct);
};

export const deleteProduct = (id: string): void => {
  const productRef = ref(db, `productos/${id}`);
  remove(productRef);
};

export const subscribeToProducts = (callback: (data: Product[]) => void): (() => void) => {
  const productsRef = ref(db, "productos");
  const listener = onValue(productsRef, (snapshot: DataSnapshot) => {
    const data = snapshot.val();
    const products: Product[] = data
      ? Object.keys(data).map((key) => ({
          id: key,
          ...(data[key] as Omit<Product, "id">),
        }))
      : [];
    callback(products);
  });

  return () => off(productsRef, "value", listener);
};
