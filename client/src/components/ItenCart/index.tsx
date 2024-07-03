import Image from "next/image";
import { IProduct } from "@/interfaces/products.interface";

interface CartItemProps {
    product: IProduct;
    removeFromCart: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ product, removeFromCart }) => (
    <li key={product.id} className="border m-2 p-2 rounded">
        <div className="flex justify-between items-center">
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
            <div className="m-3 gap-2">
                <span>{product.name} </span>
                <span> ${product.price}</span>
            </div>
            <button
                className="ml-4 p-2 bg-red-500 text-white rounded"
                onClick={() => removeFromCart(product.id)}
            >
                Quitar
            </button>
        </div>
    </li>
);

export default CartItem;
