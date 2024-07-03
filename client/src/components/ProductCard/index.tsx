"use client"
import { FC } from 'react';
import Link from 'next/link';
import { IProduct } from '@/interfaces/products.interface';
import Image from 'next/image';

interface ProductCardProps {
    product: IProduct;
}


const ProductCard: FC<ProductCardProps> = ({ product }) => {


    return (
        <div className="border m-2 p-4 flex flex-col items-center border-color rounded-lg shadow-remake cursor-pointer max-w-96">
            <div className='relative object-contain w-40 h-40 rounded-t-lg'>
                <Image
                    src={product.image}
                    alt={product.name}
                    fill={true}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={true}
                    className="rounded-t-lg"
                />
            </div>
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-green-500 font-bold">${product.price}</p>
            <Link href={`/product/${product.id}`} passHref>
                <p className="mt-2 p-2 bg-gray-500 rounded">Description{' =>'} </p>
            </Link>
        </div>
    );
};

export default ProductCard;
