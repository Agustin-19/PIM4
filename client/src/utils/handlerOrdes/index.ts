import { IProduct } from "@/interfaces/products.interface";
const API = 'https://pim4.onrender.com/'

export const handleOrder = async (
    cart: IProduct[],
    setLoading: (loading: boolean) => void,
    setError: (error: string | null) => void,
    clearCart: () => void
) => {
    setLoading(true);
    setError(null);

    try {
        const products = cart.map((item) => item.id);
        const token = localStorage.getItem('token');
        const response = await fetch(`${API}orders`, {
            method: 'POST',
            headers: {
                Authorization: `${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({products}),
        });

        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }

        const result = await response.json();
        alert('Pedido realizado con éxito');
        clearCart();
    } catch (error) {
        setError('Error al realizar el pedido. Inténtalo de nuevo.');
    } finally {
        setLoading(false);
    }
};
