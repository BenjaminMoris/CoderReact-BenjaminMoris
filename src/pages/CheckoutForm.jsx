import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../services/firebase";
import { useCart } from "../context/CartContext";
import "../css/Checkout.css";


const CheckoutForm = () => {
  const { items, totalPrice, clearCart } = useCart();
  const [buyer, setBuyer] = useState({ name: "", email: "", phone: "" });
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setBuyer({ ...buyer, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const order = {
      buyer,
      items,
      total: totalPrice,
      createdAt: serverTimestamp(),
    };
    const ref = await addDoc(collection(db, "orders"), order);
    setOrderId(ref.id);
    clearCart();
    setLoading(false);
  };

  if (loading) return <p>Generando orden...</p>;
  if (orderId) return <p>Gracias por tu compra. ID de orden: {orderId}</p>;

  if (items.length === 0) return <p>No hay productos en el carrito.</p>;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Checkout</h2>
      <input name="name" placeholder="Nombre" onChange={handleChange} required />
      <input name="email" placeholder="Email" onChange={handleChange} required />
      <input name="phone" placeholder="Teléfono" onChange={handleChange} required />
      <button type="submit">Confirmar compra</button>
    </form>
  );
};
export default CheckoutForm;
