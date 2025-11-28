import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { items, removeItem, clearCart, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div>
        <h2>Carrito vacío</h2>
        <Link to="/">Volver al catálogo</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Tu carrito</h2>
      <ul>
        {items.map(i => (
          <li key={i.id}>
            {i.name} — x{i.quantity} — ${i.price * i.quantity}
            <button onClick={() => removeItem(i.id)}>Quitar</button>
          </li>
        ))}
      </ul>
      <h3>Total: ${totalPrice}</h3>
      <button onClick={clearCart}>Vaciar carrito</button>
      <Link to="/checkout">Ir al Checkout</Link>
    </div>
  );
};
export default Cart;
