import { IProduct } from '@/interfaces/products.interface';

const API = 'http://localhost:3001/';

export async function fetchProductById(id: string): Promise<IProduct> {
    const response = await fetch(`${API}products/${id}`, { cache: 'no-store' });
    if (!response.ok) {
        throw new Error('Product not found');
    }
    const product = await response.json();
    return product;
}