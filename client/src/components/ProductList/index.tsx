import ProductCard from '@/components/ProductCard';
import { IProduct } from '@/interfaces/products.interface';
import { fetchProducts } from "@/lib/server/fetchProducts";



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
