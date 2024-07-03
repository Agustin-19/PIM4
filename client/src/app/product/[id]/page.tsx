"use client";
import Image from 'next/image';
import { IProduct } from '@/interfaces/products.interface';
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/context/CartContext";
import { AuthContext } from "@/context/AuthContext";
import Link from 'next/link';
import { fetchProductById } from "@/lib/server/fetchProducts";

interface ProductDetailProps {
    params: { id: string };
}

const ProductDetail = ({ params }: ProductDetailProps) => {
    const { token } = useContext(AuthContext);
    const { cart, addToCart } = useContext(CartContext);
    const [product, setProduct] = useState<IProduct | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const fetchedProduct = await fetchProductById(params.id);
                setProduct(fetchedProduct);
            } catch (err) {
                setError('Error al cargar el producto');
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [params.id]);

    const handleAddToCart = () => {
        if (product) {
            addToCart(product);
        }
    };

    const isProductInCart = product ? cart.some(item => item.id === product.id) : false;

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (!product) return <div>Producto no encontrado</div>;

    return (
        <div>
            <h1>Detalle del Producto</h1>
            <div className="border border-color m-2 p-4 flex flex-col items-center rounded-lg shadow max-w-96">
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
                <p className='m-2'>{product.description}</p>
                <p className=" font-bold">${product.price}</p>
                {token ? (
                    isProductInCart ? (
                        <p>
                            <span>
                                Producto agregado al carrito
                            </span>
                        </p>
                    ) : (
                        <button
                            className="mt-2 p-2 boton-color rounded"
                            onClick={handleAddToCart}
                        >
                            Agregar al Carrito
                        </button>
                    )
                ) : (
                    <Link href="/login">
                        <button className="mt-2 p-2 boton-color rounded">Ingresar para poder comprar</button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default ProductDetail;
