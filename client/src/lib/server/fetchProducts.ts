import { IProduct } from '@/interfaces/products.interface';

const API = 'https://pim4.onrender.com/';

export async function fetchProductById(id: string): Promise<IProduct> {
    const response = await fetch(`${API}products/${id}`, { cache: 'no-store' });
    if (!response.ok) {
        throw new Error('Product not found');
    }
    const product = await response.json();
    return product;
}

export async function fetchProducts(): Promise<IProduct[]> {
    const response = await fetch(`${API}products`, { cache: 'no-store' });
    const products = await response.json();
    return products;
}