import ProductList from '@/components/ProductList';

export default function Home() {

    return (
        <div className="w-full ">
            <div className="w-full grid grid-cols-1">
                <ProductList/>
            </div>
        </div>
    );
}
