import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList";
import "../css/ItemListContainer.css";
import { fetchAllProducts, fetchProductsByCategory } from "../services/products";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    const load = async () => {
      const data = categoryId ? await fetchProductsByCategory(categoryId) : await fetchAllProducts();
      setItems(data);
      setLoading(false);
    };
    load();
  }, [categoryId]);

  if (loading) return <p>Cargando catálogo...</p>;
  if (items.length === 0) return <p>No hay productos en esta categoría.</p>;

  return (
    <div className="item-list-container">
      {greeting && <h1 className="bienvenida">{greeting}</h1>}
      <ItemList items={items} />
    </div>
  );
};
export default ItemListContainer;
