import Carousel from '@/components/Carrousel';
import ProductList from '@/components/ProductList';

export default function Home() {

    return (
        <div className="w-full mt-20">
            <div className='w-8/12 mx-auto h-96'>
                <Carousel />
            </div>
            <div className="w-full mt-5 grid grid-cols-1">
                <ProductList />
            </div>
        </div>
    );
}
