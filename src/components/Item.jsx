import { Link } from "react-router-dom";
const Item = ({ product }) => (
  <div className="item-card">
    <h3>{product.name}</h3>
    <p><strong>Precio:</strong> ${product.price}</p>
    <p><strong>Categoría:</strong> {product.category}</p>
    <Link to={`/item/${product.id}`} className="btn-detail">Ver detalle</Link>
  </div>
);
export default Item;
