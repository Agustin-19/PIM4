import ProductCard from '@/components/ProductCard';
import { IProduct } from '@/interfaces/products.interface';

const API = 'http://localhost:3001/';

async function fetchProducts(): Promise<IProduct[]> {
    const response = await fetch(`${API}products`, { cache: 'no-store' });
    const products = await response.json();
    return products;
}

const ProductList = async () => {
    const products = await fetchProducts();

    return (
        <div className='w-full flex flex-col justify-center content-center'>
            <h2>Nuestros productos</h2>
            <div className='mx-5 flex justify-center content-center left-4'>
                <section className='daisy-carousel daisy-carousel-center rounded-box'>
                    {products.map((product: IProduct) => (
                        <div key={product.id} className='daisy-carousel-item'>
                            <ProductCard product={product} />
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
};

export default ProductList;
