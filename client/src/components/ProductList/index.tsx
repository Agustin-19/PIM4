import ProductCard from '@/components/ProductCard';
import { IProduct } from '@/interfaces/products.interface';
import { fetchProducts } from "@/lib/server/fetchProducts";



const ProductList = async () => {
    const products = await fetchProducts();

    return (
        <div className='w-full flex flex-col justify-center content-center text-center'>
            <h2 className='text-xl '>
                Nuestros productos
            </h2>
            <div className='m-5 flex justify-center content-center left-4'>
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
