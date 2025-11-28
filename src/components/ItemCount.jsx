import { useState } from "react";

const ItemCount = ({ stock = 10, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const inc = () => setCount(c => Math.min(c + 1, stock));
  const dec = () => setCount(c => Math.max(c - 1, 1));

  return (
    <div className="item-count">
      <button onClick={dec} disabled={count <= 1}>-</button>
      <span>{count}</span>
      <button onClick={inc} disabled={count >= stock}>+</button>
      <button onClick={() => onAdd(count)} disabled={stock === 0}>
        Agregar al carrito
      </button>
      {stock === 0 && <p>Producto sin stock</p>}
    </div>
  );
};
export default ItemCount;

