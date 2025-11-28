import { useCart } from "../context/CartContext";

const CartWidget = () => {
  const { totalUnits } = useCart();
  return (
    <div className="cart-widget">
      <img src="/carrito.png" alt="Carrito" />
      <span>{totalUnits}</span>
    </div>
  );
};
export default CartWidget;