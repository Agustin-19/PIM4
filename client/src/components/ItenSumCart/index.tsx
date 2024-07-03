interface CartSummaryProps {
    total: number;
    clearCart: () => void;
    handleOrder: () => void;
    loading: boolean;
    error: string | null;
}

const CartSummary: React.FC<CartSummaryProps> = ({ total, clearCart, handleOrder, loading, error }) => (
    <div className="mt-4">
        <h2>Total: ${total.toFixed(2)}</h2>
        {error && <p className="text-red-500">{error}</p>}
        <button
            className="m-2 p-2 boton-color rounded"
            onClick={handleOrder}
            disabled={loading}
        >
            {loading ? 'Procesando...' : 'Realizar Compra'}
        </button>
        <button
            className="m-2 p-2 bg-red-500 text-white rounded"
            onClick={clearCart}
        >
            Vaciar
        </button>
    </div>
);

export default CartSummary;