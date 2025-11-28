import { useState } from "react";
import ItemCount from "./ItemCount";
import { useCart } from "../context/CartContext";

const ItemDetail = ({ item }) => {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (qty) => {
    addItem({ id: item.id, name: item.name, price: item.price }, qty);
    setAdded(true); // Oculta el ItemCount y muestra acción siguiente
  };

  return (
    <div className="item-detail">
      <h2>{item.name}</h2>
      <p><strong>Categoría:</strong> {item.category}</p>
      <p><strong>Precio:</strong> ${item.price}</p>
      {item.oemCode && <p><strong>OEM:</strong> {item.oemCode}</p>}
      {item.compatibility && <p><strong>Compatibilidad:</strong> {item.compatibility}</p>}

      {!added ? (
        <ItemCount stock={item.stock ?? 10} initial={1} onAdd={handleAdd} />
      ) : (
        <div>
          <p>Producto agregado.</p>
          <a href="/cart">Ir al carrito</a>
        </div>
      )}
    </div>
  );
};
export default ItemDetail;
